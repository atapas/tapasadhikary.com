import nanny from "../images/projects/nanny.png";
import thoughthoroscope from "../images/projects/thought-horoscope.png";
import testcap from "../images/projects/testcap.png";
import prediction from "../images/projects/prediction.png";
import imageclassific from "../images/projects/imageclassification.jpg";
import metaproges6 from "../images/projects/es6metaprog.png";
import todojexiareact from "../images/projects/todojexiareact.gif";
import aqireact from "../images/projects/aqi-react.png";
import covid from '../images/projects/covid.png';
import addcopyright from '../images/projects/add-copyright.png';

export const projects = [
    {
        'id': 1,
        'cover': addcopyright,
        'title': 'Add Copyright to Source Code Files',
        'gitLink': 'https://github.com/atapas/add-copyright',
        'demoLink': 'https://github.com/atapas/add-copyright',
        'description': 'A simple tool to add copyright/license texts to source code files recursively and many more.',
        'tags': [
            {
                'name': 'Shell Scripting',
                'link': 'https://www.shellscript.sh/'
            }
        ]
    },
    {
        'id': 2,
        'cover': covid,
        'title': 'COVID-19 World',
        'gitLink': 'https://github.com/atapas/covid-19',
        'demoLink': 'https://covid-19-world.netlify.com/',
        'description': 'Not sure when COVID-19(Corona Virus) going to leave us. This app was just a time pass over a weekend',
        'tags': [
            {
                'name': 'reactjs',
                'link': 'https://reactjs.org/'
            },
            {
                'name': 'Recharts',
                'link': 'http://recharts.org/en-US/'
            }
        ]
    },
    {
        'id': 3,
        'cover': aqireact,
        'title': 'Air Quality Index(AQI)',
        'gitLink': 'https://github.com/atapas/aqi-react',
        'demoLink': 'https://air-quality-index.netlify.com/',
        'description': 'This is a project created to know the Air Quality Index of various parts of the world using ReactJS.',
        'tags': [
            {
                'name': 'reactjs',
                'link': 'https://reactjs.org/'
            },
            {
                'name': 'Air Quality Programmatic APIs',
                'link': 'https://aqicn.org/api/'
            }
        ]
    },
    {
        'id': 4,
        'cover': nanny,
        'title': 'Nanny Plum',
        'gitLink': 'https://github.com/atapas/nanny-plum',
        'demoLink': 'https://youtu.be/yakMYpcgED0',
        'description': 'A Fun Project to use Google Cloud API(Text to Speech) from Flutter. Do you know what? I have been using it at my home for a while now!',
        'tags': [
            {
                'name': 'flutter',
                'link': 'https://flutter.dev/'
            },
            {
                'name': 'dart',
                'link': 'https://dart.dev/'
            },
            {
                'name': 'gcp',
                'link': 'https://cloud.google.com/'
            },
            {
                'name': 'Speech to Text API',
                'link': 'https://cloud.google.com/speech-to-text/'
            }
        ]
    },
    {
        'id': 5,
        'cover': thoughthoroscope,
        'title': 'Thought Horoscope',
        'gitLink': 'https://github.com/atapas/thought-horoscope',
        'demoLink': 'https://github.com/atapas/thought-horoscope',
        'description': 'thought-horoscope is a tool to know your Horoscope for Today, Month, Week or Year. The tool works on node-cli(Command Line Interface).',
        'tags': [
            {
                'name': 'node.js',
                'link': 'https://nodejs.org/'
            },
            {
                'name': 'node-cli',
                'link': 'https://nodejs.org/api/cli.html'
            }
        ]
    },
    {
        'id': 6,
        'cover': testcap,
        'title': 'Test Cap',
        'gitLink': 'https://github.com/atapas/testcap',
        'demoLink': 'https://github.com/atapas/testcap',
        'description': 'Project to demonstrate the usage of Coolest JavaScript Test Framework called, Jest.',
        'tags': [
            {
                'name': 'jest',
                'link': 'https://jestjs.io/'
            }
        ]
    },
    {
        'id': 7,
        'cover': prediction,
        'title': 'Prediction App',
        'gitLink': 'https://github.com/atapas/horoscope-app',
        'demoLink': 'https://youtu.be/ZLYFX18TQCA',
        'description': 'A Flutter project to build an app that has basic layout, routing and server communication over REST APIs. What would be better than knowing your Horoscope in real!',
        'tags': [
            {
                'name': 'flutter',
                'link': 'https://flutter.dev/'
            },
            {
                'name': 'dart',
                'link': 'https://dart.dev/'
            }
        ]
    },
    {
        'id': 8,
        'cover': imageclassific,
        'title': 'ML - Image Classification in Browser',
        'gitLink': 'https://github.com/atapas/ml-greenroots',
        'demoLink': 'https://ml-greenroots-info.netlify.com/ML5ImageClassification/',
        'description': 'is a Pet-Project to code Machine Learning in the Browser using various Libraries and Frameworks available. The primary intestion is to have fun with some learning around it!',
        'tags': [
            {
                'name': 'reactjs',
                'link': 'https://reactjs.org/'
            },
            {
                'name': 'ml5js',
                'link': 'https://ml5js.org/'
            },
            {
                'name': 'machine learning',
                'link': 'https://en.wikipedia.org/wiki/Machine_learning'
            }
        ]
    },
    {
        'id': 9,
        'cover': metaproges6,
        'title': 'JavaScript Metaprogramming',
        'gitLink': 'https://github.com/atapas/js-mtprog',
        'demoLink': 'http://bit.ly/js-lovers-metaprog',
        'description': 'Metaprogramming is not new. However it is of less use when comes to JavaScript. Here are some samples to showcase the strength of Metaprogramming in JavaScript using ES6 Symbol, Proxy, Reflection etc.',
        'tags': [
            {
                'name': 'metaprogramming',
                'link': 'https://en.wikipedia.org/wiki/Metaprogramming'
            },
            {
                'name': 'es6 proxy',
                'link': 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy'
            },
            {
                'name': 'es6 reflect',
                'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect'
            }
        ]
    },
    {
        'id': 10,
        'cover': todojexiareact,
        'title': 'A TODO app using reactjs and Jexia',
        'gitLink': 'https://github.com/atapas/todo-jexia-react',
        'demoLink': 'https://todo-jexia-react.netlify.com/',
        'description': 'todo-jexia-react is a Proof of Concept project for using Jexia along with a Reactjs app. What could be better than writing a TODO app? It is damm favorite for everyone. Agree?',
        'tags': [
            {
                'name': 'reactjs',
                'link': 'https://reactjs.org/'
            },
            {
                'name': 'jexia',
                'link': 'https://www.jexia.com/en/'
            }
        ]
    }
];