// import kaboom lib
import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

// initialize kaboom context
kaboom({
    width:240,
    height: 160,
    scale: 2,
    crisp: true,
    global: true,
    font: 'sink',
});
loadSprite("textbox", "textbox.png");

let textbox_on = false;

function textbox(writetext){
    length = writetext.length;
    destroyAll('textbox')
    const bg = add([
            sprite('textbox'),
            pos(center().x,135),
            origin("center"),
            'textbox'
        ]);
    function add_up_to_letter(i){
        function write_letters(i){
            const txt_bg = add([
                text(writetext.substring(0,i)),
                pos(18+1, 125+1),
                color(200,200,200),
                'textbox'
            ]);
            const txt = add([
                text(writetext.substring(0,i)),
                pos(18, 125),
                color(0,0,0),
                'textbox'
            ]);
    }
        wait(i*0.05, () => {            
                write_letters(i);
            });
    }
        for (var i = 0; i <= length; i++) {
                add_up_to_letter(i);
        }
}

const dialog = addDialog();

function addDialog() {
    return {
        say(t) {
            textbox(t);
        },
        dismiss() {
            destroyAll('textbox')
        },
        active() {
            return !bg.hidden;
        },
        destroy() {
            // bg.destroy();
            txt.destroy();
        },
    };
}
dialog.say("you got no key!");
dialog.dismiss();
dialog.say("you got no keyss!");


// textbox("vdidvosvodmkvmlkvmsdkv")
// destroyAll('textbox')