<template>
    <div
        :class="{
            hidden: !isActive,
        }"
        id="cookie-consent"
        class="cookie-consent flexrow"
    >
        <p class="flexrow-item text">
            {{ $t("main cookies consent") }}
        </p>
        <p class="flexrow-item cookie-choice">
            <button
                id="cookie-ok"
                class="button default"
                @click="() => acceptCookies()"
            >
                {{ $t("main yes") }}
            </button>
            <button
                id="cookie-ko"
                class="button"
                @click="() => refuseCookies()"
            >
                {{ $t("main no") }}
            </button>
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isActive = ref(true);

onMounted(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");

    if (cookieConsent !== null) {
        isActive.value = false;
    }
});

function acceptCookies() {
    localStorage.setItem("cookie-consent", "true");
    isActive.value = false;
    window.location.reload();
}
function refuseCookies() {
    localStorage.setItem("cookie-consent", "false");
    isActive.value = false;
    window.location.reload();
}
</script>

<style scoped>
.cookie-consent.hidden {
    display: none;
}
</style>
