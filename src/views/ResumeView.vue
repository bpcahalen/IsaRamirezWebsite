<template>
    <div class="resumePage">
        <div class="resume">
            <a href="../Isa Ramirez Resume - 2026.pdf" download="IsaRamirezResume" class="resumeLink">Dance Resume</a>
            <img src="../photos/isaResumePhoto2026.png" alt="" class="resumePhoto">
        </div>
    </div>
</template>

<script>

</script>

<style>
.resumePage{
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.resume{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.resumePhoto{
    height: 1000px;
    width: 900px;
}

.resumeLink{
    padding-bottom: 50px;
    font-family: "Playfair Display", serif;
    color: #4d0066;
    text-decoration: none;
    font-size: 90px;
}

.resumeLink:hover{
    text-decoration: underline solid 1.5px;
    text-underline-offset: 5px;
}
</style>