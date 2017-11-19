'use strict'

export default {
  START_FETCH (store, promise) {
    store.fetching = promise
  },
  FINISH_FETCH (store) {
    store.fetching = false
  },
  SET_TAGS (store, value) {
    store.tags = value
  },
  SET_CHAPTERS (store, value) {
    store.chapters = value
  },
  SET_COMMITS_BEHIND (store, value) {
    store.commitsBehind = value
  },
  START_CHAPTER_FETCH (store, chapterId) {
    store.chapters[chapterId].fetching = true
  },
  FINISH_CHAPTER_FETCH (store, chapterId) {
    store.chapters[chapterId].fetching = false
  },
  PUSH_PARAGRAPHS (store, { chapterId, paragraphs }) {
    store.chapters[chapterId].paragraphs = store.chapters[chapterId].paragraphs.concat(paragraphs)
  },
  SET_PARAGRAPH (store, { chapterId, paragraphId, data }) {
    const paragraph = store.chapters[chapterId].paragraphs.find(p => p._id === paragraphId)
    if (paragraph) {
      Object.assign(paragraph, data)
    }
  },
  SET_SNACK_MESSAGE (store, message) {
    store.snackMessage = message
  },
  SET_TOKEN (store, token) {
    store.authToken = token
  }
}
