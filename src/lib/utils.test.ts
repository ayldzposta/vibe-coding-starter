import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn utility', () => {
    it('should merge classes correctly', () => {
        expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white')
    })

    it('should handle conditional classes', () => {
        expect(cn('bg-red-500', false && 'text-white')).toBe('bg-red-500')
        expect(cn('bg-red-500', true && 'text-white')).toBe('bg-red-500 text-white')
    })

    it('should handle tailwind conflicts', () => {
        expect(cn('p-4', 'p-2')).toBe('p-2')
    })
})
