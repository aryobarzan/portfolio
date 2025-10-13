import { Injectable } from '@angular/core';
import { Publication } from './publication';

@Injectable({
  providedIn: 'root',
})
export class PublicationService {
  readonly publications: Publication[] = [
    {
      authors: 'Atashpendar, Aryobarzan',
      title: 'BEACON Q: Encouraging Regular Self-Testing via a Personalized and Gamified Quiz App',
      proceedings: 'Doctoral thesis',
      publisher: 'ORBilu-University of Luxembourg',
      year: 2025,
      links: [
        {
          name: 'PDF',
          type: 'PDF',
          url: 'https://orbilu.uni.lu/bitstream/10993/65895/1/PhD_Thesis-Final-AryobarzanAtashpendar.pdf',
        },
        { name: 'Details', type: 'DOI', url: 'https://orbilu.uni.lu/handle/10993/65895' },
      ],
      abstract:
        "Studies have shown that students who study intensively before their exams tend to quickly forget the information they may have retained, while also feeling more stressed and anxious. In contrast, active learners who regularly revise and test themselves have been shown to better improve their long-term retention, as well as feel more confident for assessments. This work presents an accessible form of self-testing via a new mobile quiz app, namely BEACON Q, with various features to encourage students to break away from their bulk studying habits and follow instead an approach that relies on the so-called testing effect to induce long-term retention. To tailor the self-testing experience to the needs of the student, the app integrates a dynamic difficulty system to adjust the quizzes to each user's skill level, while also supporting interchangeable formats for each question type to alter their difficulty more significantly. Learning material in the form of immediate answer feedback and documents describing the lecture topics are made directly accessible from within the app. Spaced repetition is applied to enable automatic review suggestions and a form of recall analysis for the students to check their exam readiness. Furthermore, a bespoke block-based coding framework, called DartBlock, is developed to support programming-based quiz activities, with a mobile-first interface and interaction design. Difficulty tuning and automatic program evaluation also constitute integral parts of the framework. Finally, a unique gamification approach based on mythological Greek figures is used to personalize the testing experience and foster regular usage of the app. We report on studies we have conducted using the proposed framework with multiple university level classes, which amounted to a 3-year long collection of performance data and survey answers. The results point to a high user satisfaction rate for the platform as a testing and studying solution, though it did not lead to a significant change in learning habits, with students continuing to study intensively shortly before their exams. As an alternative approach, an exam structure based on cumulative assessment is proposed as a potential way to mitigate bulk studying and motivate more regular testing.",
    },
    {
      authors: 'Atashpendar, Aryobarzan, and Steffen Rothkugel',
      title:
        'Block-Based Programming for Mobile with Conventional Exceptions and Automatic Evaluation',
      proceedings:
        'Proceedings of the 2024 on Innovation and Technology in Computer Science Education V. 1',
      year: 2024,
      pages: '597-603',
      links: [
        { name: 'PDF', type: 'PDF', url: 'https://dl.acm.org/doi/pdf/10.1145/3649217.3653549' },
        { name: 'Details', type: 'DOI', url: 'https://dl.acm.org/doi/abs/10.1145/3649217.3653549' },
      ],
      abstract:
        'Block-based programming has been used as an introductory gateway to programming thanks to its simpler, visual approach for composing code. This work re-imagines this style of coding through the mobile-first framework DartBlock, which is intended to be integrated in a quiz application. It targets an older audience aiming to more quickly transition to the conventional programming language Java, by adopting a syntax visualization and interaction design inspired by integrated development environments. DartBlock focuses on teaching debugging through its included runtime which allows the execution of faulty code with descriptive exception throwing, as well as supporting automatic evaluation of programs given a sample solution to serve as feedback. To suit the smaller screen of mobile devices, the library relies on calculator-like visual editors for each primitive data type to facilitate the composition of complex boolean and numeric expressions without the need for textual input. Finally, we present preliminary student impressions of DartBlock from an initial use case study in a university class and provide organizational recommendations for introducing new frameworks to students.',
    },
    {
      authors: 'Sheykhmohammadi, Nazanin, Aryobarzan Atashpendar, and Denis Zampunieris',
      title:
        'High-fidelity simulation pre-briefing with digital quizzes: Using inacsl standards for improving effectiveness',
      proceedings: '16th the International Conference on Computer Supported Education (CSEDU 2024)',
      publisher: 'SciTePress',
      year: 2024,
      links: [
        {
          name: 'PDF',
          type: 'PDF',
          url: 'https://orbilu.uni.lu/bitstream/10993/61375/1/Improving_Pre_Briefing_in_High_Fidelity_Simulation__Using_Alternative_Methods_and_Mobile_Quiz_Application%20%2868%29-postprint.pdf',
        },
        {
          name: 'Details',
          type: 'DOI',
          url: 'https://orbilu.uni.lu/handle/10993/61375',
        },
      ],
      abstract:
        'High-fidelity simulations enable medical students to gain experience in typical scenarios through the use of computerized manikins, though their learning outcomes and performance greatly depend on their preparation. To that end, a pre-briefing phase is typically set up to teach the students the necessary information, including both the theory and the technical workings of the manikin. Our work explores a digital-first approach to pre-briefing, where the learners are provided quizzes through a mobile application, which allows them to identify gaps in their knowledge and reinforce their retention through repetitive testing in their own time. Additionally, demonstrative videos of the manikin are offered to complement their learning. The quiz-based approach to pre-briefing has been tested with a university class of medical students to prepare them for a basic life support simulation. We discuss our findings in terms of how the digital quizzes were perceived by students and evaluate our pre-briefing method against a set of best practices established by ”The International Nursing Association for Clinical Simulation and Learning” (INACSL). Finally, recommendations to improve the quizbased approach are outlined for future case studies.',
    },
    {
      authors: 'Atashpendar, Aryobarzan, and Steffen Rothkugel',
      title: 'Difficulty-Adjusted Quizzes: An Effectiveness Analysis',
      proceedings:
        '2023 IEEE International Conference on Teaching, Assessment and Learning for Engineering (TALE)',
      publisher: 'IEEE',
      year: 2023,
      links: [
        {
          name: 'Details',
          type: 'DOI',
          url: 'https://ieeexplore.ieee.org/abstract/document/10398305',
        },
      ],
      abstract:
        'To improve long-term retention, regular testing allows students to apply their knowledge to practical tasks and consequently reinforce their memory. To integrate regular testing in a university-level course, the mobile application BEACON Q was developed to provide students with a quiz for each weekly lecture. It dynamically tailors the difficulty of questions to their capabilities and presents detailed explanations to serve as immediate feedback to their answers. This work analyzes the app’s usage during a semester by examining the performance data of the users, their survey answers, as well as potential correlations between the app’s design and the students’ interactions. The results are discussed in terms of the hurdles to overcome when integrating regular testing in the learner’s curriculum while supporting the design principles which constitute the testing effect. Additionally, recommendations are provided for other educators who want to introduce a similar quiz app in their curriculum, which also serves as future work for BEACON Q.',
    },
    {
      authors: 'Atashpendar, Aryobarzan, and Steffen Rothkugel',
      title:
        'Improving Long-Term Retention through Personalized Recall Testing and Immediate Feedback',
      proceedings:
        '2023 11th International Conference on Information and Education Technology (ICIET)',
      publisher: 'IEEE',
      year: 2023,
      links: [
        {
          name: 'Details',
          type: 'DOI',
          url: 'https://ieeexplore.ieee.org/abstract/document/10111487',
        },
      ],
      abstract:
        "Tests have been shown to improve the long-term retention of students, referred to as the 'testing effect'. Different question formats, such as multiple choice and recall, have varying properties. While recall questions induce a longer retention than multiple choice ones, they are harder for students since answers must be actively retrieved from memory. Moreover, regular testing inherently increases the teacher's workload, particularly since feedback on each test is paramount for an effective bearing on the student's understanding and learning. This work introduces BEACON Q, a digital quiz application combining different question formats and progressively adapting their difficulty to each student’s level. The level is derived from past answers as well as ratings provided by the students which constitute their perceived understanding of each topic. BEACON Q delivers immediate feedback through detailed explanations, without requiring manual assessment by the teacher. Tests are scheduled for periods of time, thus giving the students the flexibility to choose an appropriate time to take the test. An initial evaluation of BEACON Q has been performed in the context of three different computer science classes at our university. Preliminary results are presented in this paper.",
    },
    {
      authors: 'Atashpendar, Aryobarzan, et al',
      title: 'Semantic and Interactive Search in an Advanced Note-Taking App for Learning Material',
      proceedings: 'International Conference on Human-Computer Interaction',
      publisher: 'Cham: Springer International Publishing',
      year: 2022,
      pages: '13-29',
      links: [
        {
          name: 'Details',
          type: 'DOI',
          url: 'https://link.springer.com/chapter/10.1007/978-3-031-05657-4_2',
        },
      ],
      abstract:
        'Note-taking apps on tablets are increasingly becoming the go-to space for managing learning material as a student. In particular, digital note-taking presents certain advantages over traditional pen-and-paper approaches when it comes to organizing and retrieving a library of notes thanks to various search functionalities. This paper presents improvements to the classic textual-input-based search field, by introducing a semantic search that considers the meaning of a user’s search terms and an automatic question-answering process that extracts the answer to the user’s question from their notes for more efficient information retrieval. Additionally, visual methods for finding specific notes are proposed, which do not require the input of text by the user: through the integration of a semantic similarity metric, notes similar to a selected document can be displayed based on common topics. Furthermore, a fully interactive process allows one to search for notes by selecting different types of dynamically generated filters, thus eliminating the need for textual input. Finally, a graph-based visualization is explored for the search results, which clusters semantically similar notes closer together to relay additional information to the user besides the raw search results.',
    },
    {
      authors: 'Atashpendar, Aryobarzan, Christian Grévisse, and Steffen Rothkugel',
      title: 'Enhanced sketchnoting through semantic integration of learning material',
      proceedings: 'International Conference on Applied Informatics',
      publisher: 'Cham: Springer International Publishing',
      year: 2019,
      pages: '340-353',
      links: [
        {
          name: 'Details',
          type: 'DOI',
          url: 'https://link.springer.com/chapter/10.1007/978-3-030-32475-9_25',
        },
      ],
      abstract:
        'Within the transition from pen-and-paper to digital solutions, many tablet-based note-taking apps have been developed. In addition, sketchnoting, a highly visual form of note-taking, has gained in popularity, especially in teaching and learning. While current solutions already reduce the burden of organizing and searching through stacks of paper, they provide little support in finding additional information related to the notes, and search capabilities are mostly limited to textual queries and content. In this paper, we present a novel solution for digital sketchnoting aimed at enhancing the learning experience of students. In addition to common capabilities such as handwriting recognition, our note-taking app integrates semantic annotation and drawing recognition. Handwritten notes are recognized and passed through concept recognition and entity linking tools to enable a knowledge graph-based integration of contextually relevant learning resources. We extend traditional search capabilities by including the semantic metadata from the related material as well as enabling visual queries to find recognized sketches. Finally, resembling the exchange of paper notes among students, our app allows to share the semantically enhanced notes with other devices.',
    },
  ];
}
