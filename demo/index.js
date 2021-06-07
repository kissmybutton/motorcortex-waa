import MotorCortex from '@kissmybutton/motorcortex';
import MyPluginDefinition from "../dist/bundle.umd";
const MyPlugin = MotorCortex.loadPlugin(MyPluginDefinition);

import Player from "@kissmybutton/motorcortex-player";


const clip = new MotorCortex.HTMLClip({
    html: `
        <div class="container">
            <div id="effect"></div>
        </div>
    `,
    css: `
        .container{
            width: 600px;
            height: 400px;
        }
        .container>div{
            width: 50%;
            height: 50%;
        }
        #effect{
            background-color:rgb(37, 32, 86);
            
        }

    `,
    host: document.getElementById('clip'),
    containerParams: {
        width: '600px',
        height: '400px'
    }
});

const newEffect = new MyPlugin.WAA({
    animatedAttrs: {
        transform: {rotate:"20deg",scale: "2"},
        backgroundColor: "rgb(255, 0, 85)"
      },
      initialValues:{
        transform: {rotate:"90deg"}
      }
}, {
    selector: '#effect',
    duration: 2000
});



clip.addIncident(newEffect, 0);


const player = new Player({clip});