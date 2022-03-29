import React, {useState} from 'react'
import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {
  const [ques, setQues] = useState(0);
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [btnColor, setBtnColor] = useState('#1A759F');
  const getQuiz= async()=>{
    const url='https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results[0]);
    setQuestion(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
  };
  useEffect(() => {
    getQuiz()
  }, []);

  const handleNextPress = ()=> {
    setQues(ques+1)
    setOptions(generateOptionsAndShuffle(question[ques+1]))
  }

  const generateOptionsAndShuffle = (_question)=>{
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options
  }

  const handleSelectedOption =(_option)=>{
    if(_option==question[ques].correct_answer){
      setScore(score+10)
      btnColor === "#1A759F" ? setBtnColor("green") : setBtnColor("red") 
    }
    // if(ques!=9){
    //   setQues(ques+1)
    //   setOptions(generateOptionsAndShuffle(question[ques+1]))
    // }
  }

  const handleShowResult = ()=>{
    navigation.navigate('Result', {
      score: score
    })
  }

  const handlePrevPress = ()=> {
    setQues(ques-1)
    setOptions(generateOptionsAndShuffle(question[ques-1]))
  }

  return(
    <View style={styles.container}>
    {question && (
      <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>Q. {decodeURIComponent(question[ques].question)}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}>
          <Text style={styles.option}>1.{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[1])}>
          <Text style={styles.option}>2.{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[2])}>
          <Text style={styles.option}>3.{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[3])}>
          <Text style={styles.option}>4.{decodeURIComponent(options[3])}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        {ques!=0 &&<TouchableOpacity style={styles.button} onPress={handlePrevPress}>
          <Text style={styles.buttonText}>PREV</Text>
        </TouchableOpacity>}
        {ques!=9 &&<TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>}
        {ques!=9 &&<TouchableOpacity  style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>}
        {ques==9 &&<TouchableOpacity style={styles.button} onPress={handleShowResult}>
          <Text style={styles.buttonText}>SHOW RESULT</Text>
        </TouchableOpacity>}
      </View>
      </View>
      )}
    </View>
  )
}

export default Quiz;

const styles = StyleSheet.create({
  container:{
    padding: 12,
    height:'100%'
  },
  top:{
    marginVertical:16
  },
  options:{
    marginVertical: 16,
    flex: 1
  },
  bottom:{
    marginBottom: 12,
    paddingVertical:16,
    justifyContent:"space-between",
    flexDirection:"row"
  },
  button:{
    backgroundColor: '#1A759F',
    borderRadius: 16,
    padding: 12,
    paddingHorizontal: 16,
    alignItems:'center'
  },
  buttonText:{
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  question:{
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white'

  },
  optionButton: {
    backgroundColor: '#1A759F',
    borderRadius: 16,
    paddingVertical: 12,
    marginVertical: 6,
    paddingHorizontal: 15
  },
  parent: {
    height: '100%'
  }

})