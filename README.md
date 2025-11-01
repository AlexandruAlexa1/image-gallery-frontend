# Image Gallery Frontend

![Build and Deploy](https://github.com/AlexandruAlexa1/image-gallery-frontend/actions/workflows/build-deploy.yml/badge.svg?branch=main)
![Node.js](https://img.shields.io/badge/node-20.2.0-green)
![Angular](https://img.shields.io/badge/angular-17.0.0-red)
![License](https://img.shields.io/github/license/AlexandruAlexa1/image-gallery-frontend)
![Repo Size](https://img.shields.io/github/repo-size/AlexandruAlexa1/image-gallery-frontend)
![Last Commit](https://img.shields.io/github/last-commit/AlexandruAlexa1/image-gallery-frontend)
![Issues](https://img.shields.io/github/issues/AlexandruAlexa1/image-gallery-frontend)
![Forks](https://img.shields.io/github/forks/AlexandruAlexa1/image-gallery-frontend)
![Stars](https://img.shields.io/github/stars/AlexandruAlexa1/image-gallery-frontend)


An **Angular** application to upload and view images, consuming the **[Image Gallery API](https://github.com/AlexandruAlexa1/image-gallery-api)** backend.  
Demonstrates modern frontend architecture, reactive state management, and full **AWS cloud deployment** using **S3** and **CloudFront**.

🖥 **Live Demo:** []()  
📄 **Test Report:** [View Coverage Report](https://alexandrualexa1.github.io/image-gallery-frontend/) 

---

## Features

- Upload images using pre-signed URLs provided by the backend.  
- Display uploaded images in a gallery view.  
- Delete images via backend API.  
- Reactive state management using **BehaviorSubject**.  
- Configurable API endpoint via `environment.ts`.  
- Hosted on **AWS S3**, distributed globally through **CloudFront** CDN.

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── image-upload/
│   │   └── image-list/
│   ├── services/
│   │   └── image.service.ts
│   └── state/
│       └── image-state.service.ts
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
```

---

## Key Services

### ImageService
- `generateUploadUrl(fileName, contentType, size)` → requests pre-signed upload URL from backend.  
- `deleteImage(id)` → deletes image from backend & S3.

### ImageStateService
- Manages gallery state via **BehaviorSubject** for real-time UI updates.  
- Used by both upload and gallery components.

---

## API Integration

Set API URL in `environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/images'
};
```

> In production, update `environment.prod.ts` with your Elastic Beanstalk backend URL.

---

## Usage

```bash
npm install
ng serve
```

Visit [http://localhost:4200](http://localhost:4200) to run locally.

---

## Notes

- Uses **REST API** with **pre-signed URLs** for secure uploads.  
- Updates gallery immediately after each upload.  
- Deployed on **AWS S3 + CloudFront** for high availability and global access.  
- Backend hosted on **AWS Elastic Beanstalk**, using **RDS MySQL** and **S3**.

