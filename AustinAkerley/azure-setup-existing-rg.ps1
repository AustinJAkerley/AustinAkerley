# Azure Setup Script for Austin Akerley Portfolio
# Using existing resource group: austinakerley.com in US West 2

# Variables - Using your existing resource group
$RESOURCE_GROUP="austinakerley.com"
$LOCATION="westus2"
$ACR_NAME="austinakerley"
$DNS_NAME="austinakerley"

Write-Host "Using existing resource group: $RESOURCE_GROUP in $LOCATION"

# Create Azure Container Registry
Write-Host "Creating Azure Container Registry: $ACR_NAME"
az acr create --resource-group $RESOURCE_GROUP --name $ACR_NAME --sku Basic --admin-enabled true

# Get ACR credentials
Write-Host "Getting ACR credentials..."
$ACR_USERNAME = az acr credential show --name $ACR_NAME --query "username" --output tsv
$ACR_PASSWORD = az acr credential show --name $ACR_NAME --query "passwords[0].value" --output tsv

Write-Host "`n=== IMPORTANT: Add these secrets to your GitHub repository ==="
Write-Host "Go to: https://github.com/AustinJAkerley/AustinAkerley/settings/secrets/actions"
Write-Host "`nAdd the following secrets:"
Write-Host "ACR_USERNAME: $ACR_USERNAME"
Write-Host "ACR_PASSWORD: $ACR_PASSWORD" 
Write-Host "AZURE_RESOURCE_GROUP: $RESOURCE_GROUP"
Write-Host "AZURE_DNS_NAME_LABEL: $DNS_NAME"

Write-Host "`n=== Next Steps ==="
Write-Host "1. Add the above secrets to your GitHub repository"
Write-Host "2. Push your code to trigger the deployment"
Write-Host "3. Your app will be available at: http://$DNS_NAME.westus2.azurecontainer.io"
Write-Host "4. Set up custom domain in Azure and point austinakerley.com to this endpoint"