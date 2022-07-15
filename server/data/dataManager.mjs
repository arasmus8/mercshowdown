import fs from 'fs/promises'

let chardb = []
let movedb = []
let equipdb = []
let tribedb = []

export function addTribe (name) {
  const id = tribedb.length
  tribedb.push({
    id,
    name
  })
  return { id }
}

function validateChar (char) {
}

export function addChar(char) {
  err = validateChar(char)
  if (err) {
    return { err }
  }
  const { name, attack, hp, tribe, moveIds, equipIds } = char
  const id = chardb.length
  chardb.push({
    id,
    name,
    attack,
    hp,
    tribe,
    moveIds,
    equipIds
  })
  return { id }
}
