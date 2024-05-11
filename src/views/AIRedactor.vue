<template>
  <div class="container-fluid">
    <h3 class="description" v-if="userInput.length === 0 && !isMessageSended">Enter the language you want and input the
      text, then click the button to proceed!</h3>
    <div class="settingArea" v-if="!isMessageSended">
      <div class="languageArea"><label class="languageLabel" for="languageInput">Language: </label> <input type="text" class="languageInput"
          v-model="language" placeholder="Type the language" id="languageInput"/></div>
      <div class="btnContainer" :class="{ 'appear-button': userInput.length > 0 }" v-if="userInput.length > 0">
        <div class="btn">
          <button class="clickHereBtn" @click="sendTextProduction">Send</button>
        </div>
      </div>
    </div>
    <div class="info-section" v-if="!isMessageSended">
      <textarea class="textarea" id="textarea" ref="textAreaRef" v-model="userInput" placeholder="Type your text here"></textarea>
      <div class="result">
        <div v-if="result">
          <div style="display: flex; align-items: center; color: white;" v-if="result">
            <svg title="assistant" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
              class="bi bi-robot" viewBox="0 0 16 16">
              <path
                d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
              <path
                d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
            </svg>:
          </div>
          <div v-html="result" style="white-space: pre-wrap;"></div>
        </div>
      </div>
    </div>
    <div v-else-if="isMessageSended && !result">
      <loadingComponent></loadingComponent>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import loadingComponent from "@/components/loading.vue"

const userInput = ref('');
const result = ref(null);
const language = ref("català");
const textAreaRef = ref(null);
const isMessageSended = ref(false);


const sendHelloWorld = async () => {
  try {
    const response = await axios.post('http://localhost:8000/hello', {
      prompt: userInput.value,
      language: language.value
    });
    result.value = response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const sendText = async () => {
  try {
    isMessageSended.value = true;
    result.value = null;
    const response = await axios.post('http://localhost:8000/simplify-text', {
      prompt: userInput.value,
      language: language.value
    });
    result.value = response.data;
    isMessageSended.value = false;
  } catch (error) {
    console.error('Error:', error);
  }
};

const sendTextProduction = async () => {
  try {
    isMessageSended.value = true;
    result.value = null;
      const response = await axios.post('https://tfg-backend-2gsw.onrender.com/simplify-text', {
      prompt: userInput.value,
      language: language.value
    });
    result.value = response.data;
    isMessageSended.value = false;
  } catch (error) {
    console.error('Error:', error);
  }
};

</script>

<style scoped>
.container-fluid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 0;
  padding: 0;
  position: relative;
}

.description {
  position: absolute;
  top: 0;
  margin: 10px;
}

.settingArea {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 55px;
  margin: 20px;
}

.languageLabel {
  margin-right: 10px;
  font-size: 1rem;
  text-align: center;
}

.languageInput {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  flex-grow: 1;
}

.languageArea {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}

.info-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.textarea {
  width: 40vw;
  height: 40vh;
  font-size: 16px;
  background-color: transparent;
  color: white;
  padding: 5px;
  resize: none;
}

.result {
  width: 40vw;
  height: 40vh;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  padding: 5px;
  overflow: auto;
}

.btnContainer .btn {
  position: relative;
  width: 155px;
  height: 50px;
  margin: 20px;
}

.btnContainer .btn .clickHereBtn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  color: #FFFADD;
  z-index: 1;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  transition: .5s;
  backdrop-filter: blur(15px);
  cursor: pointer;
}

.btnContainer .btn:hover .clickHereBtn {
  letter-spacing: 3px;
}

.btnContainer .btn .clickHereBtn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
  transform: skewX(45deg) translateX(0);
  transition: .5s;
}

.btnContainer .btn:hover .clickHereBtn::before {
  transform: skewX(45deg) translateX(200%);
}

.btnContainer .btn::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -5px;
  width: 30px;
  height: 10px;
  transition: 0.5s;
  transition-delay: 0s;
  background: #ff1f71;
  box-shadow: 0 0 5px #ff1f71,
    0 0 15px #ff1f71,
    0 0 30px #ff1f71,
    0 0 60px #ff1f71;
}

.btnContainer .btn:hover::before {
  bottom: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: .5s;
}

.btnContainer .btn::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -5px;
  width: 30px;
  height: 10px;
  transition: 0.5s;
  transition-delay: 0s;
  background: #ff1f71;
  box-shadow: 0 0 5px #ff1f71,
    0 0 15px #ff1f71,
    0 0 30px #ff1f71,
    0 0 60px #ff1f71;
}

.btnContainer .btn:hover::after {
  top: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: .5s;
}

::placeholder {
  color: white;
  opacity: 0.7;
}

.appear-button {
  animation: appear 0.5s ease-in;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media only screen and (max-width: 540px) {

  .textarea,
  .result {
    width: 80vw;
  }

  .info-section {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .textarea {
    margin: 10px 0;
    height: 10vh;

  }

  .settingArea {
    flex-direction: column-reverse;
    height: 100px;
  }

  .btnContainer {
    scale: 0.7;
  }

}
</style>