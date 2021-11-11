<template>
    <div class="row">

        <div class="col">

            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="container-fluid">
                    <router-link class="navbar-brand" to="/">Kitoblar</router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/login">Kirish</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/addCategory">Kategoriya qo'shish</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/addBook">Yangi kitob qo'shish</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

</style>