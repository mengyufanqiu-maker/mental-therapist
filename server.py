"""
多角色AI对话系统 — 后端API服务
FastAPI + Anthropic API, 兼容 Zeabur / Railway / 自有服务器

环境变量：
  ANTHROPIC_API_KEY  必需，Anthropic API 密钥
  MODEL               可选，默认 claude-sonnet-4-20250514
  PORT                可选，默认 8765
"""

import os
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from anthropic import Anthropic

# ── 配置 ──
API_KEY = os.getenv("ANTHROPIC_API_KEY")
if not API_KEY:
    raise RuntimeError("请设置环境变量 ANTHROPIC_API_KEY。在 Zeabur 面板 → Environment Variables 中添加。")
MODEL = os.getenv("MODEL", "claude-sonnet-4-20250514")
BASE_DIR = Path(__file__).resolve().parent

# ── 应用 ──
app = FastAPI(title="多角色AI对话系统")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

client = Anthropic(api_key=API_KEY)


# ── 数据模型 ──
class ChatRequest(BaseModel):
    prompt: str
    max_tokens: int = 1024

class ChatResponse(BaseModel):
    response: str


# ── API 路由 ──
@app.post("/api/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    try:
        msg = client.messages.create(model=MODEL, max_tokens=req.max_tokens, messages=[{"role": "user", "content": req.prompt}])
        text = "".join(b.text for b in msg.content if b.type == "text")
        return ChatResponse(response=text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/health")
async def health():
    return {"status": "ok", "model": MODEL}


# ── 前端页面 ──
HTML_FILE = BASE_DIR / "multi-role-ai-chat.html"
@app.get("/")
async def root():
    if HTML_FILE.exists():
        return FileResponse(HTML_FILE)
    return {"message": "后端运行中。请将 multi-role-ai-chat.html 放到同目录下来托管前端。"}


# ── 启动 ──
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=int(os.getenv("PORT", "8765")), reload=False)
