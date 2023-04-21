import { Styles } from "@ijstech/components";

export const containerStyle = Styles.style({
  width: 'var(--layout-container-width)',
  maxWidth: 'var(--layout-container-max_width)',
  textAlign: ('var(--layout-container-text_align)' as any),
  margin: '0 auto',
  padding: 10
})

export const duneChartStyle = Styles.style({
  display: 'block',
  $nest: {
    '&.dune-chart--dark': {
      background: '#100c2a',
      $nest: {
        'i-label': {
          color: '#fff !important'
        }
      }
    }
  }
})
