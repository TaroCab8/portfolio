const typingAnimation = (thing, hide) => {
    let textArray = thing.split("");
    let textArraySlice = thing.split(" ");
    let textLen = textArray.length;

    const wordLen = textArraySlice.map((word) => {
        return word.length;
    })

    console.log(wordLen);

    let timings = {
        easing: `steps(${Number(wordLen[0] + 1)}, end)`,
        delay: 2000,
        duration: 2000,
        fill: 'forwards'
    }



    if(textArraySlice.length == 1){
        timings.easing = `steps(${Number(wordLen[0])}, end)`;

        hide.animate([
            { left: '0%' },
            { left: `${(100 / textLen) * (wordLen[0])}%` }
        ], timings);
    } else{
        hide.animate([
            { left: '0%' },
            { left: `${(100 / textLen) * (wordLen[0] + 1)}%` }
        ], timings);
    }


    for (let i = 1; i < textArraySlice.length; i++) {
        console.log(wordLen);
        console.log(textArraySlice.length);
        const singleWordLen = wordLen[i];
        console.log(singleWordLen);

        if (i == 1) {
            var leftInstance = (100 / textLen) * (wordLen[i - 1] + 1);
            console.log(leftInstance);
        }

        let timings2 = {
            easing: `steps(${Number(singleWordLen + 1)}, end)`,
            delay: (2 * (i + 1) + (2 * i)) * (1000),
            // delay: ((i*2)-1)*1000,
            duration: 2000,
            fill: 'forwards'
        }

        if (i == (textArraySlice.length - 1)) {
            timings2.easing = `steps(${Number(singleWordLen)}, end)`;
            hide.animate([
                { left: `${leftInstance}%` },
                { left: `${leftInstance + ((100 / textLen) * (wordLen[i]))}%` }
            ], timings2);
        } else {
            hide.animate([
                { left: `${leftInstance}%` },
                { left: `${leftInstance + ((100 / textLen) * (wordLen[i] + 1))}%` }
            ], timings2);

        }
        
        leftInstance = leftInstance + ((100 / textLen) * (wordLen[i] + 1));
    }


}
export default typingAnimation