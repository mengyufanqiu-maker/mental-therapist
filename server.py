import os
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel

API_KEY = os.getenv("DEEPSEEK_API_KEY", "").strip()
MODEL = os.getenv("MODEL", "deepseek-chat")
BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(title="multi-role-chat")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

client = None
if API_KEY:
    from openai import OpenAI
    client = OpenAI(api_key=API_KEY, base_url="https://api.deepseek.com/v1")

class ChatRequest(BaseModel):
    prompt: str
    max_tokens: int = 1024

class ChatResponse(BaseModel):
    response: str

@app.post("/api/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    if not client:
        raise HTTPException(status_code=503, detail="DEEPSEEK_API_KEY not set")
    try:
        resp = client.chat.completions.create(model=MODEL, max_tokens=req.max_tokens, messages=[{"role":"user","content":req.prompt}])
        text = resp.choices[0].message.content or ""
        return ChatResponse(response=text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/health")
async def health():
    return {"status":"ok" if client else "no_key", "model":MODEL, "provider":"deepseek"}

HTML_FILE = BASE_DIR / "multi-role-ai-chat-v2.html"
@app.get("/")
async def root():
    if HTML_FILE.exists():
        return FileResponse(HTML_FILE)
    return {"message":"ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=int(os.getenv("PORT","8765")), reload=False)
