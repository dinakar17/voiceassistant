import Tts from 'react-native-tts';

export const readText = (text: string) => {
    Tts.speak(text);
};

export const initTts = async () => {
    await Tts.setDefaultLanguage('en-US');
    await Tts.setDefaultVoice('com.apple.ttsbundle.Samantha-compact');
    await Tts.setDucking(true);
};