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
            background-color:rgb(255, 0, 85);
        }

    `,
    host: document.getElementById('clip'),
    containerParams: {
        width: '600px',
        height: '400px'
    }
});

const newEffect = new MyPlugin.MyEffect({
    animatedAttrs: {
        "background-color": "rgb(255, 0, 85)",
      },
      initialValues:{
        "background-color": "rgb(37, 32, 86)"
      }
}, {
    selector: '#effect',
    duration: 1000
});



clip.addIncident(newEffect, 0);


const player = new Player({clip});