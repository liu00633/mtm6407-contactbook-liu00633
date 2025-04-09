const STORAGE_KEY = 'contacts-app-vue'

export function getContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

export function saveContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
}

export function getContact(id) {
  return getContacts().find(c => c.id === id)
}

export function addContact(contact) {
  const contacts = getContacts()
  contacts.push(contact)
  saveContacts(contacts)
}

export function updateContact(updated) {
  let contacts = getContacts()
  contacts = contacts.map(c => (c.id === updated.id ? updated : c))
  saveContacts(contacts)
}

export function deleteContact(id) {
  const contacts = getContacts().filter(c => c.id !== id)
  saveContacts(contacts)
}
