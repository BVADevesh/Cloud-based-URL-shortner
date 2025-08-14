# Cloud-Agnostic URL Shortener

A Node.js + Express + PostgreSQL app that can run both on AWS and any non-AWS hosting provider.

## Run Locally / Non-AWS Hosting
1. Install Docker & Docker Compose.
2. Copy `.env.example` to `.env` and adjust values if needed.
3. Run: `docker-compose up --build -d`
4. Access API at `http://localhost:3000`.

## Deploy to AWS (Basic EC2 Example)
1. Install Terraform.
2. Update variables in `terraform/variables.tf`.
3. Run:
   ```
   terraform init
   terraform apply
   ```

For production, use ECS/Fargate + RDS.

---
