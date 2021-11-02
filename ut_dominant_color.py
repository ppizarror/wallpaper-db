from colorthief import ColorThief
import pyperclip
import tkinter as tk

app = tk.Tk()
f = tk.Frame(app)
f.pack()

directory=tk.StringVar(None)
dirname=tk.Entry(f,textvariable=directory,width=50)
dirname.pack(side="left")

f = tk.Frame(app)
f.pack()

def dominant():
	img = directory.get().replace("'",'').replace(',','')
	color_thief = ColorThief(f'img/{img}')
	# get the dominant color3
	dominant_color = color_thief.get_color(quality=1)
	dom = '#%02x%02x%02x' % dominant_color
	pyperclip.copy(dom)
	directory.set(f'Color final {dom}')

btn = tk.Button(f, text='Process', command=dominant)
btn.pack()

app.mainloop(0)