# Austin Akerley Portfolio Website

A modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, deployed to Azure using Docker and GitHub Actions.

## 🚀 Live Site
- **Production**: [austinakerley.com](https://austinakerley.com)
- **Azure Container**: [austinakerley.eastus.azurecontainer.io](http://austinakerley.eastus.azurecontainer.io)

## 🛠️ Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Containerization**: Docker
- **Cloud**: Azure Container Registry + Azure Container Instances
- **CI/CD**: GitHub Actions
- **Domain**: Namecheap

## 📋 Prerequisites
- Node.js 18+
- Docker Desktop
- Azure CLI
- GitHub account

## 🏗️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start
```

## 🐳 Docker Commands

```bash
# Build Docker image
npm run docker:build

# Run Docker container locally
npm run docker:run

# Build and run in one command
npm run docker:dev
```

## ☁️ Azure Deployment Setup

### 1. Run Azure Setup Script
```powershell
# Make sure you're logged into Azure CLI
az login

# Run the setup script
.\azure-setup.ps1
```

### 2. Configure GitHub Secrets
Add these secrets in your GitHub repository settings (`Settings > Secrets and variables > Actions`):

- `ACR_USERNAME`: Azure Container Registry username
- `ACR_PASSWORD`: Azure Container Registry password  
- `AZURE_RESOURCE_GROUP`: Resource group name
- `AZURE_DNS_NAME_LABEL`: DNS name for container

### 3. Deploy
Push to the `main` or `master` branch to trigger automatic deployment via GitHub Actions.

## 🌐 Custom Domain Setup (Namecheap to Azure)

### Option 1: Azure App Service (Recommended)
1. Create an Azure App Service
2. Configure custom domain in Azure portal
3. Update Namecheap DNS to point to Azure App Service

### Option 2: Azure Front Door + Container Instances
1. Set up Azure Front Door
2. Add custom domain and SSL certificate
3. Point Namecheap DNS to Front Door endpoint

### Option 3: Cloudflare Proxy (Alternative)
1. Add domain to Cloudflare
2. Update Namecheap nameservers to Cloudflare
3. Create CNAME record pointing to Azure container endpoint

## 📁 Project Structure

```
austinakerley/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .github/workflows/
│   └── deploy.yml
├── Dockerfile
├── .dockerignore
├── azure-setup.ps1
└── README.md
```

## 🔄 Development Workflow

1. **Local Development**: Make changes and test with `npm run dev`
2. **Docker Testing**: Test containerized app with `npm run docker:dev`
3. **Push to GitHub**: Commit and push changes
4. **Automatic Deployment**: GitHub Actions builds and deploys to Azure
5. **Verify**: Check deployment at Azure endpoint

## 🐛 Troubleshooting

### Docker Issues
- Ensure Docker Desktop is running
- Check Docker daemon is accessible
- Verify Dockerfile syntax

### Azure Deployment Issues
- Check GitHub Actions logs
- Verify Azure credentials in GitHub secrets
- Ensure resource group and ACR exist

### Domain Issues
- Verify DNS propagation (can take up to 48 hours)
- Check Namecheap DNS settings
- Validate Azure custom domain configuration

## 📝 Next Steps

1. ✅ Deploy basic "Hello World" page
2. 🔄 Set up custom domain (austinakerley.com)
3. 📱 Add responsive design and portfolio content
4. 🎨 Implement dark/light theme toggle
5. 📊 Add analytics and SEO optimization
6. 🚀 Add contact form and blog functionality

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and use as a template for your own portfolio!

## 📄 License

MIT License - feel free to use this code for your own projects.
