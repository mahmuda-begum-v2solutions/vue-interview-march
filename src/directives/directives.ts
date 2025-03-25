export const vFirst = {
  mounted(el: HTMLElement, binding?: { value: string }) {
    console.log(el, binding?.value)
  },
}
