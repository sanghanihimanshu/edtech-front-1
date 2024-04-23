// import React from "react";
// import { Replay } from "vimond-replay";
// import CompoundVideoStreamer from "vimond-replay/video-streamer/compound";
// export const VideoPlayer = ({ src }) => {
//   return (
//     <Replay source={src} initialPlaybackProps={{ isPaused: true }}>
//       <CompoundVideoStreamer />
//     </Replay>
//   );
// };

import React, { useState } from "react";
import RadioButton from "./RadioButton";
import { Alert } from "./Alert";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

export const QuizDisplay = ({ src }) => {
  const { isLoading, data:quizdata, error, isError } = useQuery(['quiz'], async () => {
    return await axios.post("https://dc37-34-147-18-222.ngrok-free.app/process",{
        'keyid': src,
        "name":"himanshu"
    })
  }, {
    onSuccess: (data) => {
      console.log(data.data)
    }
  })

  if (isLoading) {

    return <h1>Loading please wait</h1>
  }
  if (isError) {
    return (<h1>{error.message}</h1>)
  }
  // const quizz = {
  //   "Is a static member of a class?": [
  //     "static means that it ' s a member of the class itself as opposed to an instance of the class",
  //     "static means that it ' s a member of the class itself as opposed to an instance of the class",
  //     "it ' s a member of the class itself",
  //     "",
  //   ],
  //   "Is it a compiled and interpreted language at the same time?": [
  //     "it ' s both a compiled and interpreted language at the same time",
  //     "it ' s both a compiled and interpreted language at the same time",
  //     "both a compiled and interpreted language at the same time .",
  //     "",
  //   ],
  //   "What do most people do?": [
  //     "the computer just needs to have the java runtime environment or jre installed",
  //     "the computer just needs to have the java run ##time environment or jr ##e installed",
  //     "have the java run ##time environment",
  //     "needs to have the java run ##time environment or jr ##e installed .",
  //   ],
  //   "What does Spring framework do?": [
  //     "powers enterprise web apps",
  //     "powers enterprise web apps",
  //     "it powers enterprise web apps with spring framework",
  //     "enterprise web apps with spring framework ,",
  //   ],
  //   "What does the computer need to have installed?": [
  //     "java runtime environment or jre",
  //     "java run ##time environment or jr ##e",
  //     "the java run ##time environment",
  //     "the computer just needs to have the java run ##time environment or jr ##e installed",
  //   ],
  //   "What does the type and name do?": [
  //     "return a value from it",
  //     "return a value from it",
  //     "and return a value",
  //     "a value from it .",
  //   ],
  //   "What does this mean for developers?": [
  //     "right once , run anywhere",
  //     "right once , run anywhere",
  //     "for developers , this means right once , run anywhere .",
  //     "this means right once",
  //   ],
  //   "What is Java's ability to compile to platform independent bytecode?": [
  //     "a high - level multi - paradigm programming language",
  //     "a high - level multi - paradigm programming language",
  //     "",
  //     "multi - paradigm programming language famous",
  //   ],
  //   "What is the difference between C and C++?": [
  //     "compiling to machine code like c or c + + , it compiles to bytecode that can run on any operating system without recompiling",
  //     "compiling to machine code like c or c + + , it com ##pile ##s to byte ##code that can run on any operating system without rec ##omp ##iling",
  //     "",
  //     "instead of compiling to machine code like c or c + + , it com ##pile ##s to byte ##code that can run on any operating system without rec ##omp ##iling , which is made possible by executing the code with the java virtual machine or j ##v ##m . it ' s both a compiled and interpreted language at the same time . the computer just needs to have the java run ##time environment or jr ##e installed . and most of them do . for developers , this means right once , run anywhere . it ' s a strongly typed language with a curly brace syntax similar to the c family . however , it provides more high - level features like garbage collection , run ##time type checking , and reflection",
  //   ],
  //   "What is the main feature of the IDE?": [
  //     "garbage collection , runtime type checking , and reflection",
  //     "garbage collection , run ##time type checking , and reflection",
  //     "the class is required to have a main method",
  //     "ability to com ##pile to platform independent byte ##code . it was designed by james go ##sling in 1990 at sun micro ##systems . one of its first demonstrations was the star 7 pd ##a , which gave birth to the java mascot duke . today , it ' s one of the world ' s most popular programming languages . it powers enterprise web apps with spring framework , big data pipeline ##s with had ##oop , mobile apps on android , and even things like the controller for nasa ' s maestro mars rover . what made java innovative is that instead of compiling to machine code like c or c + + , it com ##pile ##s to byte ##code that can run on any operating system without rec ##omp ##iling , which is made possible by executing the code with the java virtual machine or j ##v ##m . it ' s both a compiled and interpreted language at the same time . the computer just needs to have the java run ##time environment or jr ##e installed . and most of them do . for developers , this means right once , run anywhere . it ' s a strongly typed language with a curly brace syntax similar to the c family . however , it provides more high - level features like garbage collection , run ##time type checking , and reflection . to get started , install the java development kit or jd ##k . then create a file ending in . java . every java program starts with a class name , which should also match the file name . the class is required to have a main method . this is where your code will start executing",
  //   ],
  //   "What is the main method of a class?": [
  //     "where your code will start executing",
  //     "where your code will start executing",
  //     "this is where your code will start executing . inside the method , define a variable",
  //     "your code will start executing . inside the method , define a variable by starting with a type , followed by a name and value",
  //   ],
  //   "What is the name of the JDK?": [
  //     "java development kit",
  //     "java development kit",
  //     "the java development kit or jd ##k .",
  //     "development kit or jd ##k",
  //   ],
  //   "What is the name of the Java application?": [
  //     "star 7 pda , which gave birth to the java mascot duke . today , it ' s one of the world ' s most popular programming languages . it powers enterprise web apps with spring framework , big data pipelines with hadoop , mobile apps on android , and even things like the controller for nasa ' s maestro mars rover",
  //     "star 7 pd ##a , which gave birth to the java mascot duke . today , it ' s one of the world ' s most popular programming languages . it powers enterprise web apps with spring framework , big data pipeline ##s with had ##oop , mobile apps on android , and even things like the controller for nasa ' s maestro mars rover",
  //     "",
  //     "maestro mars rover . what made java innovative is that instead of compiling to machine code like c or c + + , it com ##pile ##s to byte ##code that can run on any operating system without rec ##omp ##iling , which is made possible by executing the code with the java virtual machine or j ##v ##m . it ' s both a compiled and interpreted language at the same time . the computer just needs to have the java run ##time environment or jr ##e installed . and most of them do . for developers , this means right once , run anywhere . it ' s a strongly typed language with a curly brace syntax similar to the c family . however , it provides more high - level features like garbage collection , run ##time type checking , and reflection . to get started , install the java development kit",
  //   ],
  //   "What is the name of the file that you want to create?": [
  //     ". java",
  //     ". java",
  //     "java .",
  //     "",
  //   ],
  //   "What is the name of the language that is used by millions of people?": [
  //     "java",
  //     "java",
  //     "it ' s one of the world ' s most popular programming languages . it powers enterprise web apps with spring framework , big data pipeline ##s with had ##oop , mobile apps on android , and even things like the controller for nasa ' s maestro mars rover . what made java",
  //     "",
  //   ],
  //   "What is the name of the variable that is defined inside the method?": [
  //     "a type",
  //     "a type",
  //     "type , followed by a name and value",
  //     "starting with a type , followed by a name and value .",
  //   ],
  //   "What is the new keyword?": [
  //     "to instantiate an object from the class",
  //     "to instant ##iate an object from the class",
  //     "instant ##iate an object from the class .",
  //     "use the new key ##word to instant ##iate an object",
  //   ],
  //   "What is the output format?": [
  //     "standard",
  //     "standard",
  //     "the standard output",
  //     "[CLS] what is the output format ? [SEP] java , a high - level multi - paradigm programming language famous for its ability to com ##pile to platform independent byte ##code . it was designed by james go ##sling in 1990 at sun micro ##systems . one of its first demonstrations was the star 7 pd ##a , which gave birth to the java mascot duke . today , it ' s one of the world ' s most popular programming languages . it powers enterprise web apps with spring framework , big data pipeline ##s with had ##oop , mobile apps on android , and even things like the controller for nasa ' s maestro mars rover . what made java innovative is that instead of compiling to machine code like c or c + + , it com ##pile ##s to byte ##code that can run on any operating system without rec ##omp ##iling , which is made possible by executing the code with the java virtual machine or j ##v ##m . it ' s both a compiled and interpreted language at the same time . the computer just needs to have the java run ##time environment or jr ##e installed . and most of them do . for developers , this means right once , run anywhere . it ' s a strongly typed language with a curly brace syntax similar to the c family . however , it provides more high - level features like garbage collection , run ##time type checking , and reflection . to get started , install the java development kit or jd ##k . then create a file ending in . java . every java program starts with a class name , which should also match the file name . the class is required to have a main method . this is where your code will start executing . inside the method , define a variable by starting with a type , followed by a name and value . we can then print it to the standard output using the built - in system class",
  //   ],
  //   "What is the public keyword?": [
  //     "it can be used outside of this class",
  //     "it can be used outside of this class",
  //     "means that it can be used outside of this class .",
  //     "the public key ##word means that it can be used outside of this class . and static means that it ' s a member of the class itself as opposed to an instance of the class",
  //   ],
  //   "What is the purpose of defining methods on a class?": [
  //     "because we ' re inside of a class , we define functions",
  //     "because we ' re inside of a class , we define functions",
  //     "",
  //     "we ' re inside of a class , we define functions as methods on this class .",
  //   ],
  //   "What is the syntax of the C language?": [
  //     "curly brace",
  //     "curly brace",
  //     "a curly brace syntax",
  //     "it ' s a strongly typed language with a curly brace syntax similar to the c family",
  //   ],
  //   "What is the use of custom classes?": [
  //     "blueprints for objects",
  //     "blue ##print ##s for objects",
  //     "add attributes and methods to them",
  //     "are blue ##print ##s for objects , then add attributes and methods",
  //   ],
  //   "What should the class name match with the file name?": [
  //     "main method",
  //     "main method",
  //     "a main method . this is where your code will start executing",
  //     "",
  //   ],
  //   "What was the name of the first PDA demonstration?": [
  //     "star 7",
  //     "star 7",
  //     "the star 7 pd ##a",
  //     "7 pd ##a ,",
  //   ],
  //   "What was the name of the first computer designed by James Gosling?": [
  //     "star 7 pda",
  //     "star 7 pd ##a",
  //     "the star 7",
  //     "pd ##a ,",
  //   ],
  //   "Where will your code start executing?": [
  //     "main method",
  //     "main method",
  //     "a main method . this is where your code will start executing . inside the method",
  //     "the class",
  //   ],
  // };

  //   const quizdata=quizz.map((key,value)=>{
  //     return(

  //       <>
  //     <span className="text-lg font-medium ms-14">
  //       {key}
  //   </span>
  //   <div className="ms-14">
  //     <RadioButton props={value} />
  //   </div>
  //     </>
  // )
  //   })

  const quizz=quizdata.data

  const questionsArray = Object.entries(quizz).map(([question, options]) => ({
    question,
    options: options.map((text, index) => ({
      id: index + 1,
      text,
      isCorrect: index === 0 ? 1 : 0, // Set isCorrect to true for the first option, false for others
    })),
    arr: null,
  }));

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [curr, setcurr] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 2);
    }

    if (curr + 1 < questionsArray.length) {
      setcurr(curr + 1);
    } else {
      setFinalResults(true);
    }
  };
  return (
    <>
      <div className="question-card ms-12">
        <div className="w-[800px] bg-gray-600 p-4 text-white border-2 rounded-lg">
          <h2>
            Question {curr + 1} out of {questionsArray.length}
          </h2>
          <h3 className="mt-2">{questionsArray[curr].question}</h3>
        </div>
        <ul>
          {questionsArray[curr]?.options.map((option) => {
            const swh = option.text.replace(/#/g, "");
            return (
              <li
                onClick={() => optionClicked(option.isCorrect)}
                key={option.id}
                className={`w-[800px] bg-gray-200 p-2 text-black border-2 cursor-pointer hover:bg-gray-300 rounded-lg mt-2 mb-2 ${
                  option.text === null || option.text.length === 0
                    ? "hidden"
                    : ""
                }`}
              >
                {swh}
              </li>
            );
          })}
        </ul>
      </div>

      {showFinalResults ? (
        <>
          <Alert title={"Your Score"} description={score} />
        </>
      ) : (
        ""
      )}
    </>
  );
};