# Discord Selfbot 🤖

A powerful Discord selfbot with Lavalink music support, AI chat integration, server cloning, waitlist management, and custom triggers.

## Features

✨ **Music Playback**
- Play songs via Lavalink (Wavelink support)
- Pause, resume, skip commands
- Queue management
- Now playing display

🤖 **AI Chat Integration**
- NVIDIA Llama 2 AI API
- Conversation history tracking
- Owner-only access

🔔 **Custom Triggers**
- Add/remove trigger messages
- Owner-controlled responses
- Automatic message detection

👑 **Owner Commands**
- Waitlist management (add/remove/view users)
- Server cloning functionality
- Account status monitoring
- Full command control

⚙️ **Configuration**
- Configurable prefix (`1`)
- Environment-based settings
- Persistent data storage (JSON)
- Lavalink WebSocket integration

## Installation

### Prerequisites
- Python 3.9+
- Lavalink server running
- Discord bot token
- NVIDIA API Key

### Setup

1. Clone the repository
```bash
git clone https://github.com/bhavigaming1234-crypto/Self-bot.git
cd Self-bot
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

3. Create `.env` file
```bash
cp .env.example .env
```

4. Edit `.env` with your credentials:
```env
DISCORD_TOKEN=your_token_here
BOT_OWNER_ID=1390807168126554234
PREFIX=1
LAVALINK_WS=ws://lavalinkv4.serenetia.com:80/v4/websocket
LAVALINK_REST=http://lavalinkv4.serenetia.com/v4
LAVALINK_PASSWORD=https://dsc.gg/ajidevserver
NVIDIA_API_KEY=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
```

5. Run the bot
```bash
python main.py
```

## Commands

### Music Commands (Prefix: `1`)
- `1play <song>` - Play a song from YouTube or URL
- `1stop` - Stop and disconnect from voice
- `1pause` - Pause playback
- `1resume` - Resume playback
- `1skip` - Skip to next song
- `1queue` - Show the music queue
- `1np` - Show now playing song

### Trigger Commands
- `1addtrigger <trigger> | <response>` - Add trigger message
- `1removetrigger <trigger>` - Remove trigger
- `1viewtriggers` - View all triggers

### Owner Commands (Owner Only)
- `1addwaitlist <user> <reason>` - Add user to waitlist
- `1removewaitlist <user>` - Remove from waitlist
- `1viewwaitlist` - View all waitlisted users
- `1cloneserver [guild_id]` - Clone a server
- `1accountstatus` - Show account status

### AI Chat Commands
- `1ai <prompt>` - Chat with NVIDIA Llama 2 AI
- `1airclear` - Clear conversation history

### Utility
- `1help` - Show help message

## Configuration Details

| Variable | Description | Default |
|----------|-------------|---------|
| `DISCORD_TOKEN` | Your Discord bot token | Required |
| `BOT_OWNER_ID` | Owner user ID | 1390807168126554234 |
| `PREFIX` | Command prefix | `1` |
| `LAVALINK_WS` | Lavalink WebSocket URL | ws://lavalinkv4.serenetia.com:80/v4/websocket |
| `LAVALINK_REST` | Lavalink REST URL | http://lavalinkv4.serenetia.com/v4 |
| `LAVALINK_PASSWORD` | Lavalink password | https://dsc.gg/ajidevserver |
| `NVIDIA_API_KEY` | NVIDIA AI API Key | Required for AI features |

## Lavalink Setup

A Lavalink server is already configured in the `.env.example`:
- **WebSocket:** `ws://lavalinkv4.serenetia.com:80/v4/websocket`
- **REST:** `http://lavalinkv4.serenetia.com/v4`
- **Password:** `https://dsc.gg/ajidevserver`

## File Structure

```
Self-bot/
├── main.py              # Bot entry point
├── config.py            # Configuration loader
├── requirements.txt     # Python dependencies
├── .env.example         # Environment template
├── .gitignore          # Git ignore rules
├── README.md           # This file
├── cogs/               # Command modules
│   ├── music.py        # Music playback commands
│   ├── owner.py        # Owner-only commands
│   ├── help.py         # Help command
│   ├── triggers.py     # Trigger listener
│   └── ai.py           # AI chat commands
└── data/               # Persistent data (auto-created)
    ├── waitlist.json
    └── triggers.json
```

## Usage Examples

### Add Trigger
```
1addtrigger hello | Hi there!
1addtrigger thanks | You're welcome!
```

### Add to Waitlist
```
1addwaitlist @user#1234 Waiting for approval
```

### Play Music
```
1play never gonna give you up
1play https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

### AI Chat
```
1ai What is Python?
1ai Explain machine learning
```

## Security Notes

⚠️ **Important:**
- Only the owner (ID: `1390807168126554234`) can use commands
- Keep your `.env` file secure - never commit it to Git
- Self-bots violate Discord Terms of Service - use at your own risk
- Never share your bot token or API keys

## Troubleshooting

### Bot doesn't respond
- Check if the bot is running: `python main.py`
- Verify `DISCORD_TOKEN` is valid
- Check bot permissions in Discord server

### Lavalink connection fails
- Verify Lavalink server is running and accessible
- Check `LAVALINK_WS` and `LAVALINK_REST` URLs
- Ensure firewall allows connections

### AI commands not working
- Verify `NVIDIA_API_KEY` is correct
- Check internet connection
- Verify API key has permissions

## Support & Contact

For issues or questions:
- Create an issue on GitHub
- Join the support server: https://dsc.gg/ajidevserver

## License

MIT License - See LICENSE file for details

## Disclaimer

This bot is for educational purposes. Using self-bots violates Discord's Terms of Service. Use at your own risk. The developer is not responsible for account bans or other consequences.
