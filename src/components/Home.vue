<template>
  <section class="home">
    <div v-if="$loadingRouteData" class="loader">
      <div class="loader__item"></div>
      <div class="loader__title">Chargement</div>
    </div>

    <div class="presentation" v-if="!$loadingRouteData">
      <h1 class="presentation__title">
        <span class="presentation__name">Emmanuel Béziat</span>
        <span class="presentation__age"><span>{{ age }}</span> ({{ nextBirthday }})</span>
      </h1>

      <module-codehome></module-codehome>
    </div>

    <module-updates v-if="!$loadingRouteData"></module-updates>
  </section>
</template>

<script>
import Moment from 'moment'
import 'moment/locale/fr'
import moduleUpdates from '../components/modules/Updates'
import moduleCodehome from '../components/modules/Codehome'

export default {
  data () {
    return {
      age: null,
      nextBirthday: null
    }
  },

  components: {
    moduleCodehome,
    moduleUpdates
  },

  route: {
    data (transition) {
      const date = '16.09.1987-02:26'
      const format = 'DD.MM.YYYY-HH:mm'
      const birthday = Moment(date, format)
      const nextbd = Moment(date, format).set({ 'year': Moment().year() })

      Moment.updateLocale('fr', {
        relativeTime: {
          future: 'pour encore %s',
          past: 'depuis %s'
        }
      })

      transition.next({
        age: birthday.fromNow(true),
        nextBirthday: nextbd.fromNow()
      })
    }
  }
}
</script>
