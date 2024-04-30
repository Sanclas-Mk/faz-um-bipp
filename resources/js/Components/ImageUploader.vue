<template>
  <div>
    <input type="file" @change="uploadImage" />
    <img :src="imageUrl" v-if="imageUrl" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
    async uploadImage(event) {
      const formData = new FormData();
      formData.append("image", event.target.files[0]);

      try {
        const response = await axios.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        this.imageUrl = `/images/${response.data.image}`;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    },
  },
};
</script>
