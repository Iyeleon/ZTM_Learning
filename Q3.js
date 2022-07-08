// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that 
// if you enter HEX color format it returns RGB and 
// if you enter RGB color format it returns HEX.

const rgbhexConverter= (color)=>{

    const rgbHex = color =>{
        let hex='#'
        color.forEach(e =>hex += e.toString(16))
        return hex
    }

    const hexRGB = color=> {
        color = color.slice(1);
        color = color.match(/.{1,2}/g)
        let newColor=[];
        color.forEach(e=> newColor.push(parseInt(e,16)))
        return newColor
    }
    let finalColor;
    typeof(color)==='string'?  finalColor=hexRGB(color) : finalColor=rgbHex(color);
   return finalColor
}

rgbhexConverter([255,200,255])
rgbhexConverter('#6cf542')