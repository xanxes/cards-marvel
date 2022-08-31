"use strict"

const herois = [
    'Iron - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]

const criarCard = (items) => {
        const ul = document.querySelector('ul')
        const div = document.createElement('div')
        div.classList.add('items')
        let separador = items.split('-')
        div.innerHTML = `
            <h3>${separador[0]}</h3>
            <div class="text">${separador[1]}</div>
        `
        ul.appendChild(div)
    }
    
herois.forEach(criarCard)