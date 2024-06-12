<script setup>
const closeModal = () => {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.style.display = 'none';
  }
};
</script>

<template>
  <div id="modal" class="modal" @click="closeModal">
    <div class="modal-content" @click.stop>
      <span class="close-btn" @click="closeModal">&times;</span>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/bw7a4FHmorg?si=itneophzGujw9rvb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: none;
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.8);
}

.modal-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn {
  color: #fff;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: relative;
  top: -175px;
  left: 580px;
}

.close-btn:hover,
.close-btn:focus {
  color: #a4a4a4;
  text-decoration: none;
  cursor: pointer;
}
</style>