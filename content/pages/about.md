---
title: seungwoo's about
layout: post
---

# Experiences

### **AI Engineer @ [3Billion](https://3billion.io/ko/index)**

#### Dec. 2023 - Present

- Working on Large Language Models (LLMs) for medical diagnosis.

  - Generated an instruction dataset for ACMG guidelines using Self-Instruct
  - Conducted parameter-efficient fine-tuning (PEFT) and alignment learning on Llama and Mistral models

- Building a Retrieval Augmented Generation (RAG) pipeline using clinical papers:

  - Implementing prompt engineering techniques
  - Developing image and table embedding methods

- Utilizing [dify](http://dify.ai) for pipeline construction and management

### Software Engineer @ [Dancers Connect](https://www.dancers-connect.com/)

#### Oct. 2023 - Dec. 2023

- Worked as a front-end engineer, developed and maintained services at [danceapply.com](https://www.danceapply.com/) using ReactJS and Typescript.

### Research Assistant @ UNIST

#### Mar. 2021 - Jun. 2023

- Implemented and conducted research on hilbert diffusion models.
  - Implemented [Neural Diffusion Processes](https://arxiv.org/abs/2206.03992) architecture in PyTorch pre-empting official release [[Code](https://github.com/sjchoi86/yet-another-diffusion-models/tree/ndp)]
  - Implemented 1D functional datasets in [Spectral Diffusion Processes](https://arxiv.org/abs/2209.14125) and conducted 1D experiments
  - Implemented and conducted 2D image experiment codes using the proposed diffusion model in distributed setting [[Code](https://github.com/seungwoos/hilbert-diffusion-model)]
    - Unconditional image generation, coarse-to-fine image generation
  - Empirically analyzed the relationship between hilbert diffusion model and inverse heat dissipation model, which is a discrete version of proposed model
  - Accepted for publication in _NeurIPS_, 2023
- Conducted experiments on 2D cytology and CT image generation using proposed diffusion model with acceleration.
  - Conducted experiments on diffusion acceleration by [DPM-Solver](https://arxiv.org/abs/2206.00927) by tuning near-zero timestep
  - Empirically demonstrated the necessity of continual training for stable acceleration of diffusion models to prevent underfitting

### Research Intern @ Tomocube AI Team

#### Mar. 2021 - Jul. 2022

- Conducted experiments on thyroid malignancy classification and proposed a combination method of bright field and refractive index images [[Code](https://github.com/thyroidclass/thyroid-classification)]
  - Used DenseNet and XGBoost to build patch-level and cluster-level models.
  - Analyzed the patch-level model using Grad-CAM and Brenner-gradient for different modalities.
  - Accepted for publication in _Scientific Reports_
- Implemented post-stenting stent prediction of Intravascular Ultrasound (IVUS) cardiovascular model based on vision transformer, and conducted experiments using different modalities (image and clinical information)
  - Developed a regression model with convolutions and attention mechanisms to handle both image data and clinical (numerical) information based on [MetaFormer](https://arxiv.org/abs/2203.02751)
  - Conducted experiments with polar coordinate images and compared them with Cartesian coordinate images
  - Analyzed the attention map for visual interpretation of each degree in IVUS images
- Conducted experiments on tumor segmentation of 3D Medical Segmentation Decathlon with synthetically generated imbalanced and noisy label datasets
  - Used U-ResNet and ScNAS as base models to demonstrate the robustness of NeuBoots
  - Constructed synthetic noisy labels using base model logits for multi-label data
  - Empirically analyzed the efficiency of NeuBoots in terms of Dice score

### Collaborative Research with [YUHS](https://yuhs.severance.healthcare/yuhs/index.do)

#### Jan. 2022 - Jul. 2022

- Conducted experiments on brain malignancy differentiation using 2D CT images from YUHS
  - Implemented classification models using deep ensembles and neural bootstrapper techniques
  - Analyzed metrics by adjusting thresholds and used CAM (Class Activation Mapping) for model interpretability
  - Accpeted for publication in _Computer Methods and Programs in Biomedicine_

### Teaching Assistant @ UNIST

#### Sep. 2022 - Dec. 2022

- [AI502] Principles of Deep Learning
  - Instructor: Sungbin Lim
  - Conducted tutorials on CNN [[colab](https://colab.research.google.com/drive/1BYSxWUwROqUAxpee1OfldkICl9GN3lNx?usp=sharing)] and distributed training [[colab](https://colab.research.google.com/drive/1qD2PP1CupSN0KQ_kSC2uO5Bzkgb2QNkD?usp=sharing)].

# Education

## Ulsan National Institute of Science and Technology (UNIST)

M.S. in Artificial Intelligence (Mar. 2021 - Aug. 2023)

- Learning Intelligent Machine (LIM) Lab advised by [Prof. Sungbin Lim](https://www.sungbin-lim.net/)

## Handong Global University (HGU)

B.S. in Computer Science and Engineering (Mar. 2013 - Feb. 2021)

- Compulsory military service in R.O.K. Air Force (Dec. 2014 - Dec. 2016)

# Publications

#### \* denotes equal contribution

### Differentiation of gliblastoma from solitary brain metastasis using deep ensembles: Empirical estimation of uncertainty for clinical reliability

Yae Won Park*, Sujeong Eom*, **Seungwoo Kim**, Sungbin Lim, Seng Chan You, Seung-Koo Lee, Sung Soo Ahn

_Computer Methods and Programs in Biomedicine_ Volume 254 [[paper](https://www.sciencedirect.com/science/article/abs/pii/S0169260724002839)]

### Score-based Generative Modeling through Stochastic Evolution Equations in Hilbert Spaces

Sungbin Lim, Eunbi Yoon, Taehyun Byun, Taewon Kang, **Seungwoo Kim**, Kyungjae Lee, Sungjoon Choi

_NeurIPS_, 2023 (Spotlight) [[paper](https://proceedings.neurips.cc/paper_files/paper/2023/hash/76c6f9f2475b275b92d03a83ea270af4-Abstract-Conference.html)] [[github](https://github.com/KU-LIM-Lab/hdm-official)]

### Machine-learning-based diagnosis of thyroid fine-needle aspiration biopsy synergistically by Papanicolaou staining and refractive index distribution

Young Ki Lee*, Dongmin Ryu*, **Seungwoo Kim\***, Juyeon Park, Seog Yun Park, Donghun Ryu, Hayoung Lee, Sungbin Lim, Hyun-Seok Min, YongKeun Park, Eun Kyung Lee
\*Scientific Reports\* 13 (1), 9847 [[paper](https://www.nature.com/articles/s41598-023-36951-2)]

### D-Angora: Extending Angora to Effective Distributed Fuzzing

**Seungwoo Kim\***, Jihyeon Park*, Sihyung Yoo*, Jungin Cho\*, Shin Hong

_Korea Computer Congress_ (KCC), 2022 [[paper](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE09874794)]
