---
date: '2'
title: 'Eve Chatbot'
cover: './eve.jpeg'
github: 'https://github.com/mtaruno/eve-bot'
external: 'https://towardsdatascience.com/complete-guide-to-building-a-chatbot-with-spacy-and-deep-learning-d18811465876'
tech:
  - Keras
  - spaCy
  - Gensim
showInProjects: true
---

I took 1 million Tweets, preprocessed it, and used it to make a chatbot called EVE that serves as a customer service agent for Apple Support at Twitter. Along the way, I iteratively used many techniques to find out more about my text data, including KNN clustering, n-gram analysis, document embeddings, and LDA.

As for modelling, I used a Bidirectional LSTM in Keras to classify different customer intents. To make my chatbot smarter and able to recognize different situations, I also used a named entity recognition model (with gradient descent) for entity extraction.

I wrote a Medium article about this which is in the external link right below. There you can also find a demo video.
