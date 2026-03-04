# Nadhi AI

### AI-Powered Legal Document Analysis & Drafting for Indian Commercial Contracts

NyayaDraft AI is an intelligent legal assistant designed to analyze, understand, and draft Indian legal documents such as shop agreements, Memorandum of Understanding (MoU), and commercial contracts.

The system combines **Retrieval-Augmented Generation (RAG)** and **fine-tuned Large Language Models (LLMs)** to automate contract analysis, extract key clauses, and generate legally structured documents.

This project aims to reduce manual effort in reviewing and drafting legal agreements while improving efficiency and accuracy.

---

# Features

### Legal Document Analysis

* Upload legal documents (PDF/DOCX)
* Extract key clauses and entities
* Identify important legal terms
* Summarize long contracts
* Highlight potential risks

### Legal Drafting

* Generate shop rental agreements
* Draft Memorandum of Understanding (MoU)
* Create commercial contracts
* Suggest missing legal clauses

### Intelligent Question Answering

Ask questions about uploaded contracts:

Example:

* What is the contract duration?
* What are the payment terms?
* Is there a termination clause?

### Indian Legal Context

The system is designed specifically for **Indian legal documents**, considering:

* Indian Contract Act, 1872
* Commercial agreements
* Shop rental agreements
* Vendor contracts
* Partnership agreements

---

# System Architecture

User → Frontend (Next.js)
↓
FastAPI Backend
↓
RAG Retrieval System (Vector Database)
↓
Fine-Tuned Legal LLM
↓
Response Generation

---

# Tech Stack

### AI / Machine Learning

* HuggingFace Transformers
* Mistral / LLaMA Models
* Sentence Transformers
* PEFT (QLoRA Fine-Tuning)

### RAG Infrastructure

* LangChain
* FAISS Vector Database
* Embedding Models

### Backend

* Python
* FastAPI

### Frontend

* Next.js
* React

### Data Processing

* pdfplumber
* PyPDF2
* spaCy

### Deployment

* Docker (optional)

---

# Project Structure

```
NyayaDraft-AI/
│
├── backend
│   ├── main.py
│   ├── rag_pipeline.py
│   ├── model_loader.py
│   ├── pdf_parser.py
│
├── frontend
│   ├── pages
│   ├── components
│
├── datasets
│   ├── contracts
│   ├── training_data.jsonl
│
├── fine_tuning
│   ├── train_model.py
│
├── vector_db
│   ├── faiss_index
│
└── README.md
```

---

# Installation

Clone the repository

```
git clone https://github.com/yourusername/NyayaDraft-AI.git
cd NyayaDraft-AI
```

Create virtual environment

```
python -m venv venv
source venv/bin/activate
```

Install dependencies

```
pip install -r requirements.txt
```

---

# Running the Backend

Start FastAPI server

```
uvicorn main:app --reload
```

Server will run at:

```
http://127.0.0.1:8000
```

---

# Running the Frontend

```
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:3000
```

---

# Dataset

The system uses a combination of:

* Indian commercial contract templates
* Shop rental agreements
* Memorandum of Understanding (MoU)
* Vendor and partnership agreements

Data is processed into a **JSON instruction dataset** for fine-tuning.

Example training format:

```
{
"instruction": "Draft a shop rental agreement",
"input": "Location: Pune, Rent: 20000/month, Duration: 3 years",
"output": "Complete shop rental agreement text..."
}
```

---

# RAG Pipeline

1. Extract text from uploaded documents
2. Split documents into chunks
3. Convert chunks into embeddings
4. Store embeddings in FAISS vector database
5. Retrieve relevant chunks during queries
6. Send retrieved context to LLM for response generation

---

# Fine-Tuning

The base model is fine-tuned using **QLoRA** to specialize in:

* Indian legal contracts
* Commercial agreem
