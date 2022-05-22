import DOMPurify from 'dompurify'

/**
 * 分析 DOM 結構，並清理不安全的 HTML
 * @param {string} dirty DOM string
 * @returns {string} sanitized DOM string
 */
export const DOMSanitize = (dirty = '') => DOMPurify.sanitize(dirty)
