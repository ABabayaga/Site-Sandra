import { useEffect, useRef } from 'react'

const FOCUSABLE_SELECTOR =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

/**
 * Standard WAI-ARIA dialog behavior for a modal mounted at `containerRef`:
 * moves focus inside on mount, keeps Tab/Shift+Tab cycling within the
 * container while it's open, and restores focus to whatever triggered it
 * on unmount. Used by every modal in the app instead of re-implementing
 * this per component.
 * https://www.w3.org/WAI/ARIA/apg/patterns/dialog/
 */
export function useFocusTrap<T extends HTMLElement>() {
    const containerRef = useRef<T>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const previouslyFocused = document.activeElement as HTMLElement | null
        const getFocusable = () => Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))

        const focusables = getFocusable()
        ;(focusables[0] ?? container).focus()

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return
            const items = getFocusable()
            if (items.length === 0) return

            const first = items[0]
            const last = items[items.length - 1]

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault()
                last.focus()
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault()
                first.focus()
            }
        }

        container.addEventListener('keydown', handleKeyDown)
        return () => {
            container.removeEventListener('keydown', handleKeyDown)
            previouslyFocused?.focus?.()
        }
    }, [])

    return containerRef
}
