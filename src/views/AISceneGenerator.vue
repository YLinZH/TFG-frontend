<template>
    <div class="container-fluid aiSceneGenerator">
        <h3 class="description" v-if="!isMessageSended">Fill the form below to generate an social story!</h3>
        <div class="formSection" v-if="!isMessageSended">
            <div class="row mb-3">
                <div class="col">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName" aria-describedby="nameHelp" v-model="name"
                        placeholder="Enter your name" required>
                    <div id="nameHelp" class="form-text">Tips: You can use a nickname if you prefer.</div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="inputAge" class="form-label">Age</label>
                    <input type="number" class="form-control" id="inputAge" placeholder="Enter your age" v-model="age"
                        required>
                </div>
                <div class="col">
                    <label for="selectGender" class="form-label">Gender</label>
                    <select class="form-select" id="selectGender" v-model="gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="textAreaSituation" class="form-label">Specific social situation</label>
                    <textarea type="number" class="form-control" id="textAreaSituation"
                        placeholder="Enter a specific social situation" rows="2" aria-describedby="situationHelp"
                        v-model="situation" required>
                        </textarea>
                    <div id="situationHelp" class="form-text">Tips: You can enter something like "Meeting a new
                        friend" or "attending a birthday party".</div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="textAreaHobbies" class="form-label">Interests and hobbies</label>
                    <textarea type="number" class="form-control" id="textAreaHobbies"
                        placeholder="Enter your interests and hobbies" rows="2" aria-describedby="hobbiesHelp"
                        v-model="hobbies" required>
                        </textarea>
                    <div id="hobbiesHelp" class="form-text">Tips: You can enter something like "Drawing, reading
                        comic books, playing video games".</div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="textAreaChallenges" class="form-label">Specific challenges related to the
                        situation</label>
                    <textarea type="number" class="form-control" id="textAreaChallenges"
                        placeholder="Enter the specific challenges related to the situation" rows="2"
                        aria-describedby="challengesHelp" v-model="challenges" required>
                        </textarea>
                    <div id="challengesHelp" class="form-text">Tips: You can enter something like "Feeling anxious
                        in large social gatherings".</div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="textAreaOutcomes" class="form-label">Desired outcomes</label>
                    <textarea type="number" class="form-control" id="textAreaOutcomes"
                        placeholder="Enter your desired outcomes" rows="2" aria-describedby="outcomesHelp"
                        v-model="outcomes" required>
                        </textarea>
                    <div id="outcomesHelp" class="form-text">Tips: You can enter something like "To enjoy the party
                        and interact with some classmates".</div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="inputLanguage" class="form-label">Language</label>
                    <input type="text" class="form-control" id="inputLanguage" aria-describedby="languageHelp"
                        v-model="language" placeholder="Enter the language of the generated story" required>
                    <div id="languageHelp" class="form-text">For example: English, Español, Français, Català, etc.
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" @click="generateStoryProduction">Generate story</button>
        </div>

        <div class="formSection" v-else-if="result && isMessageSended">
            <div class="result" v-html="result" style="white-space: pre-wrap;"></div>
            <button class="btn btn-primary" style="margin-top: 30px;" @click=backToForm>Back to the form</button>
        </div>

        <div v-else-if="!result && isMessageSended">
            <loadingComponent></loadingComponent>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import loadingComponent from "@/components/loading.vue"
//variables de control
const isMessageSended = ref(false);
const result = ref(null);
// Data
const name = ref('');
const age = ref(null);
const gender = ref('');
const situation = ref('');
const hobbies = ref('');
const challenges = ref('');
const outcomes = ref('');
const language = ref('');


const resetData = () => {
    name.value = '';
    age.value = null;
    gender.value = '';
    situation.value = '';
    hobbies.value = '';
    challenges.value = '';
    outcomes.value = '';
    language.value = '';
}

const backToForm = () => {
    isMessageSended.value = false;
    result.value = null;
    resetData();
}

const generateStoryDevelopment = async () => {
    try {
        isMessageSended.value = true;
        const response = await axios.post('http://localhost:8000/generate-story', {
            name: name.value,
            age: age.value,
            gender: gender.value,
            situation: situation.value,
            hobbies: hobbies.value,
            challenges: challenges.value,
            outcomes: outcomes.value,
            language: language.value
        });
        result.value = response.data;
    } catch (error) {
        console.error('Error:', error);
    }


};

const generateStoryProduction = async () => {
    try {
        isMessageSended.value = true;
        const response = await axios.post('tfg-backend-mu.vercel.app/generate-story', {
            name: name.value,
            age: age.value,
            gender: gender.value,
            situation: situation.value,
            hobbies: hobbies.value,
            challenges: challenges.value,
            outcomes: outcomes.value,
            language: language.value
        });
        result.value = response.data;
    } catch (error) {
        console.error('Error:', error);
    }
};

</script>

<style scoped>
.aiSceneGenerator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    position: relative;
}

.description {
    position: absolute;
    top: 0;
    margin: 10px;
}

.formSection {
    margin: 100px 0;
    width: 60vw;
    border: 1px solid white;
    border-radius: 10px;
    padding: 50px;
}

.form-text {
    color: white;
}

input,
textarea {
    background: transparent !important;
    color: white !important;
}

input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}


::placeholder {
    color: white;
    opacity: 0.7;
}

label {
    font-weight: bold;
}

@media only screen and (max-width: 540px) {
    .formSection {
        margin: 100px 0;
        /* height: 80vh; */
        width: 100vw;
        border: none;
        border-radius: 10px;
        padding: 50px;
    }

}

@media only screen and (min-width: 541px) and (max-width: 1100px) {
    .formSection {
        margin: 100px 0;
        /* height: 80vh; */
        width: 80vw;
        border: 1px solid white;
        border-radius: 10px;
        padding: 50px;
    }

}
</style>