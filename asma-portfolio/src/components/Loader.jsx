import { AnimatePresence, motion } from 'framer-motion'

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <div className="flex items-center gap-3 font-mono text-lg text-mist-muted">
            <span className="font-semibold text-accent">asma@portfolio</span>
            <span className="text-mist-dim">:~$</span>
            <motion.span
              className="inline-block h-5 w-2.5 bg-accent"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
