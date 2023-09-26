export function useArticles() {
  return {
    async getAll() {
      const result = await $fetch("http://localhost:1337/api/articles", {
        headers: {
          "Authorization": "Bearer bd01355b38e054e619d0543f2254dada150e32e1b5939e096000a653b56a3154ac716c788952c05f4b9037ae8bec0d2c6ddbb0edab5daff27393a89c723b31647b13ca45271dae30ba650202a8ae0464b78d584a090cbe049ca75b536ac6602b8d3932e37b3be181c67cc0fb7f3928909f44df18c382d5397b03c1a72bfcb1dd"
        }
      })

      return result;
    },
    async get(id: number) {
      const result = await $fetch(`http://localhost:1337/api/articles/${id}`, {
        headers: {
          "Authorization": "Bearer bd01355b38e054e619d0543f2254dada150e32e1b5939e096000a653b56a3154ac716c788952c05f4b9037ae8bec0d2c6ddbb0edab5daff27393a89c723b31647b13ca45271dae30ba650202a8ae0464b78d584a090cbe049ca75b536ac6602b8d3932e37b3be181c67cc0fb7f3928909f44df18c382d5397b03c1a72bfcb1dd"
        }
      })

      return result;
    }
  }
}
