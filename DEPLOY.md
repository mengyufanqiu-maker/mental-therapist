# 多角色AI对话系统 — 部署指南

## Zeabur 部署（推荐，最简单）

### 1. 准备文件

把这三个文件放到一个文件夹里：

```
multi-role-chat/
  ├── server.py                # 后端
  ├── multi-role-ai-chat.html  # 前端
  └── requirements.txt         # 依赖
```

### 2. 上传到 Zeabur

1. 打开 [Zeabur](https://zeabur.com)，创建新项目
2. 选择 **Deploy Service** → 上传整个文件夹（或连接 GitHub 仓库）
3. Zeabur 会自动识别 Python 项目并安装依赖

### 3. 设置环境变量

在 Zeabur 项目面板 → **Environment Variables** 中添加：

| 变量名 | 值 |
|--------|-----|
| `ANTHROPIC_API_KEY` | `sk-ant-你的API密钥` |

（可选）如果想换模型：
| `MODEL` | `claude-haiku-3-5-20241022`（成本更低） |

### 4. 访问

Zeabur 会自动生成一个域名（如 `https://xxx.zeabur.app`），打开就是完整应用。

---

## 自有服务器部署

```bash
pip install -r requirements.txt
export ANTHROPIC_API_KEY="sk-ant-你的密钥"
python server.py
# 访问 http://你的IP:8765
```

### Nginx 反向代理（可选）

```nginx
server {
    listen 80;
    server_name your-domain.com;
    location / {
        proxy_pass http://127.0.0.1:8765;
        proxy_set_header Host $host;
    }
}
```

### systemd 自启（可选）

```
[Unit]
Description=多角色AI对话
After=network.target
[Service]
Type=simple
WorkingDirectory=/opt/multi-role-chat
Environment=ANTHROPIC_API_KEY=你的密钥
ExecStart=uvicorn server:app --host 0.0.0.0 --port 8765
Restart=always
[Install]
WantedBy=multi-user.target
```

---

## 模型选择

`server.py` 默认使用 `claude-sonnet-4-20250514`，可以通过环境变量 `MODEL` 切换：

| 模型 | 特点 |
|------|------|
| `claude-sonnet-4-20250514` | 平衡效果与成本（默认） |
| `claude-haiku-3-5-20241022` | 速度快，成本低 |
| `claude-opus-4-20250514` | 最强理解力，成本高 |
