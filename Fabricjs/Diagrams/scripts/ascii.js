"use strict";

class Color
{
    constructor(r, g, b)
    {
        this._r = r;
        this._g = g;
        this._b = b;
    }

    R() { return this._r; }
    G() { return this._g; }
    B() { return this._b; }
}

function ColorToInteger(color)
{
    return (((color.R() / 25) * 25) * 21 / 100) + (((color.G() / 25) * 25) * 72 / 100) + (((color.B() / 25) * 25) * 7 / 100);
}

function ImageToColor(image, x, y)
{
    return new Color(image.data[(y * image.width * 4) + (x * 4)],
                     image.data[(y * image.width * 4) + (x * 4) + 1],
                     image.data[(y * image.width * 4) + (x * 4) + 2]);
}

function GetAsciiTextSimple(image)
{
    var m = " .,:;ox%#@";
    var x, y, l, i;
    var s = "";

    l = m.length;

    for (y = 0; y < image.height; y++)
    {
        for (x = 0; x + x + x + 2 < image.width; x++)
        {
            var i = (y * image.width * 4) + (x * 4);

            if (i >= image.data.length)
                continue;

            i = ColorToInteger(ImageToColor(image, x + x + x + 0, y));
            i += ColorToInteger(ImageToColor(image, x + x + x + 1, y));
            i += ColorToInteger(ImageToColor(image, x + x + x + 2, y));
            i = (i * l) / 768;

            if (i <= 0 || i >= 10)
                s += " ";
            else
                s += m.substr(l - i, 1);
        }

        i = 0;
        s += "<br />";
    }

    return s;
}

