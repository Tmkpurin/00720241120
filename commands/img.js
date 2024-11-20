export default async event => {
  try {
    const result = await event.reply({
      type: 'image',
      originalContentUrl: 'https://i.imgur.com/Hsu32s9.jpeg',
      previewImageUrl: 'https://i.imgur.com/Hsu32s9.jpeg'
    })
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
