export function formatarData(data) {
  if (data) {
    const [ano, mes, dia] = data.slice(0, 10).split('-')
    return `${dia}/${mes}/${ano}`
  }
}
