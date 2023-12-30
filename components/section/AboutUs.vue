<template>
  <div class="w-full bg-off-white y-padding" id="about-us">
    <UContainer>
      <UCard>
        <template #header>
          <SectionHeading label="over ons" />
        </template>
        <div
          class="flex flex-col space-y-8 tablet:flex-row tablet:space-y-0 tablet:space-x-8 tablet:justify-between"
        >
          <div class="flex-shrink space-y-4 tablet:w-7/12 tablet:space-y-12">
            <h3>The Fightstore, Een Begrip In Almere!</h3>
            <p>
              In december 2019 hebben wij onze deuren geopend en inmiddels zijn
              wij een begrip in Almere. Wij streven ernaar om de beste producten
              aan onze klanten te bieden. The Fightstore bevindt zich in hartje
              Almere-stad. Wij zijn een vechtsport winkel voor al jouw
              vechtsportartikelen en voedingssupplementen. Wij zijn een shop in
              shop samen met The Fightstudio, een personal training studio.
            </p>
          </div>
          <div>
            <img
              src="/about-us.jpg"
              alt="about us image"
              class="rounded-lg shadow-lg w-full max-w-[380px]"
            />
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>
