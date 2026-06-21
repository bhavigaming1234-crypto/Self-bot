# Discord Selfbot 🤖 (Node.js)

A powerful Discord selfbot built with **discord.js** featuring Lavalink music support, NVIDIA AI chat integration, server cloning, waitlist management, and custom triggers.

## Features ✨

🎵 **Music Playback**
- Play songs via Lavalink
- Pause, resume, skip commands
- Queue management
- Now playing display

🤖 **AI Chat Integration**
- NVIDIA Llama 2 (Meta) AI API
- Automatic response on bot mention (when enabled)
- Conversation history tracking
- Owner-only access
- Enable/disable auto-response commands

🔔 **Custom Triggers**
- Add/remove trigger messages (owner-only)
- Owner-controlled automatic responses
- Pattern matching on messages

👑 **Owner Commands**
- Waitlist management (add/remove/view users)
- Server cloning functionality
- Account status monitoring
- Full command control

⚙️ **Configuration**
- Configurable prefix (`1`)
- Environment-based settings
- Persistent JSON data storage
- Lavalink integration ready

## Installation 📦

### Prerequisites
- Node.js 16.0+
- npm or yarn
- Discord bot token
- NVIDIA API Key
- Lavalink server (optional)

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/bhavigaming1234-crypto/Self-bot.git
cd Self-bot
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file**
```bash
cp .env.example .env
```

4. **Edit `.env` with your credentials:**
```env
DISCORD_TOKEN=your_bot_token_here
BOT_OWNER_ID=1390807168126554234
PREFIX=1
LAVALINK_WS=ws://lavalinkv4.serenetia.com:80/v4/websocket
LAVALINK_REST=http://lavalinkv4.serenetia.com/v4
LAVALINK_PASSWORD=https://dsc.gg/ajidevserver
NVIDIA_API_KEY=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
ENABLE_SERVER_CLONE=true
```

5. **Run the bot**
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

## Commands 🎮

### Music Commands (Prefix: `1`)
- `1play <song>` - Play a song from YouTube or URL
- `1stop` - Stop and disconnect from voice
- `1pause` - Pause playback
- `1resume` - Resume playback
- `1skip` - Skip to next song
- `1queue` - Show the music queue
- `1np` - Show now playing song

### Trigger Commands (Owner Only)
- `1addtrigger <trigger> | <response>` - Add trigger message
- `1removetrigger <trigger>` - Remove trigger
- `1viewtriggers` - View all triggers

**Examples:**
```
1addtrigger hello | Hi there!
1addtrigger thanks | You're welcome!
```

### Owner Commands (Owner Only - ID: 1390807168126554234)
- `1addwaitlist <user> <reason>` - Add user to waitlist
- `1removewaitlist <user>` - Remove from waitlist
- `1viewwaitlist` - View all waitlisted users
- `1cloneserver [guild_id]` - Clone a server
- `1accountstatus` - Show account status

**Examples:**
```
1addwaitlist @user#1234 Waiting for approval
1cloneserver
1viewwaitlist
```

### AI Chat Commands (Owner Only)
- `1ai <prompt>` - Chat with NVIDIA Llama 2 AI
- `1aienable` - Enable auto-response when bot is mentioned
- `1aidisable` - Disable auto-response on mention
- `1aistatus` - Show AI auto-response status
- `1airclear` - Clear conversation history

**Examples:**
```
1ai What is Python?
1aienable
@bot hello  # Bot responds automatically
1aistatus
```

### Utility Commands
- `1help` - Show help message

## Configuration 🔧

| Variable | Description | Default |
|----------|-------------|---------|
| `DISCORD_TOKEN` | Your Discord bot token | Required |
| `BOT_OWNER_ID` | Owner user ID | 1390807168126554234 |
| `PREFIX` | Command prefix | `1` |
| `LAVALINK_WS` | Lavalink WebSocket URL | ws://lavalinkv4.serenetia.com:80/v4/websocket |
| `LAVALINK_REST` | Lavalink REST URL | http://lavalinkv4.serenetia.com/v4 |
| `LAVALINK_PASSWORD` | Lavalink password | https://dsc.gg/ajidevserver |
| `NVIDIA_API_KEY` | NVIDIA AI API Key | Required for AI features |

## File Structure 📁

```
Self-bot/
├── index.js                 # Main bot entry point
├── config.js               # Configuration loader
├── package.json            # Dependencies
├── .env.example            # Environment template
├── .gitignore             # Git ignore rules
├── README.md              # This file
├── commands/              # Command modules
│   ├── music/
│   ├── triggers/
│   ├── owner/
│   ├── ai/
│   └── utility/
├── events/
│   ├── ready.js
│   └── messageCreate.js
├── utils/
│   ├── triggerManager.js
│   ├── waitlistManager.js
│   └── aiManager.js
└── data/                  # Auto-created
```

## Usage Examples 📝

### Play Music
```
1play rick astley never gonna give you up
1pause
1resume
1skip
```

### AI Chat
```
1ai What is Python?
1aienable
@bot hello  # Auto-responds
1airclear
```

### Triggers
```
1addtrigger hello | Hi there!
1viewtriggers
1removetrigger hello
```

### Waitlist
```
1addwaitlist @user Reason
1viewwaitlist
1removewaitlist @user
```

## Security ⚠️

- Keep `.env` secure - never commit to Git
- Self-bots violate Discord ToS - use at own risk
- Never share bot token or API keys

## Support 💬

- GitHub Issues: Create an issue
- Discord: https://dsc.gg/ajidevserver

## License 📄

MIT License

## Disclaimer

For educational purposes only. The developer is not responsible for account bans or consequences.
