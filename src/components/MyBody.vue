<!-- Body template -->
<template>
  <div class="body d-flex flex-grow-1">
    <div class="container-lg pt-4">
      <!-- First line of charts -->
      <div class="row">
        <!-- Users -->
        <div class="col-sm-6 col-lg-3">
          <div class="card mb-4 text-white bg-primary">
            <div class="card-body pb-0 d-flex justify-content-between align-items-start">
              <div class="mx-3">
                <div class="fs-4 fw-semibold">26K <span class="fs-6 fw-normal">(-12.4% ↓)</span></div>
                <div>Users</div>
              </div>
            </div>
            <MyChartUsers />
          </div>
        </div>
        <!-- Income -->
        <div class="col-sm-6 col-lg-3">
          <div class="card mb-4 text-white bg-info">
            <div class="card-body pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div class="fs-4 fw-semibold">$6.200 <span class="fs-6 fw-normal">(40.9% ↑)</span></div>
                <div>Income</div>
              </div>
            </div>
            <MyChartIncome />
          </div>
        </div>
        <!-- Conversion Rate -->
        <div class="col-sm-6 col-lg-3">
          <div class="card mb-4 text-white bg-warning">
            <div class="card-body pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div class="fs-4 fw-semibold">2.49% <span class="fs-6 fw-normal">(84.7% ↑)</span></div>
                <div>Conversion Rate</div>
              </div>
            </div>
            <MyChartConversionRate />
          </div>
        </div>
        <!-- Sessions -->
        <div class="col-sm-6 col-lg-3">
          <div class="card mb-4 text-white bg-danger">
            <div class="card-body pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div class="fs-4 fw-semibold">44K <span class="fs-6 fw-normal">(-23.6% ↓)</span></div>
                <div>Sessions</div>
              </div>
            </div>
            <MyChartSessions />
          </div>
        </div>
      </div>

      <!-- Second part : Traffic -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <h4 class="card-title">Traffic</h4>
              <div class="small">January - July 2022</div>
            </div>
            <div class="d-md-block">
              <div class="btn-group">
                <input class="btn-check" id="optionDay" type="radio" name="optionsDay"><label
                  class="btn btn-outline-secondary">Day</label>
                <input class="btn-check" id="optionMonth" type="radio" name="optionsMonth"><label
                  class="btn btn-outline-secondary active">Month</label>
                <input class="btn-check" id="optionYear" type="radio" name="optionsYear"><label
                  class="btn btn-outline-secondary">Year</label>
              </div>
            </div>
          </div>
          <MyChartTraffic />
        </div>
        <div class="card-footer">
          <div class="row row-cols-1 row-cols-md-5 text-center">
            <div class="col mb-sm-2 mb-0">
              <div class="text-secondary">Visits</div>
              <div>29.703 Users (40%)</div>
              <div class="progress mt-2" style="height:4px">
                <div class="progress-bar bg-success" role="progressbar" style="width: 40%" aria-valuenow="40"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="col mb-sm-2 mb-0">
              <div class="text-secondary">Unique</div>
              <div>24.093 Users (20%)</div>
              <div class="progress mt-2" style="height:4px">
                <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col mb-sm-2 mb-0">
              <div class="text-secondary">Pageviews</div>
              <div>78.706 Views (60%)</div>
              <div class="progress mt-2" style="height:4px">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="60"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col mb-sm-2 mb-0">
              <div class="text-secondary">New Users</div>
              <div>22.123 Users (80%)</div>
              <div class="progress mt-2" style="height:4px">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="80"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col mb-sm-2 mb-0">
              <div class="text-secondary">Bounce Rate</div>
              <div>40.15%</div>
              <div class="progress mt-2" style="height:4px">
                <div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Third part : Socials network -->
      <div class="row">
        <!-- Facebook -->
        <div class="col-sm-6 col-lg-4">
          <div class="card mb-4">
            <div class="card-header position-relative d-flex justify-content-center align-items-center" style="background-color: #3a559f;">
              <img src="https://assets.stickpng.com/images/584ac2d03ac3a570f94a666d.png" alt="Facebook" width="48px" height="48px">
            </div>
            <div class="card-body row text-center">
              <div class="col">
                <div class="fs-5 fw-bold">89k</div>
                <div class="text-uppercase text-secondary">friends</div>
              </div>
              <div class="vr"></div>
              <div class="col">
                <div class="fs-5 fw-bold">459</div>
                <div class="text-uppercase text-secondary">feeds</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Twitter -->
        <div class="col-sm-6 col-lg-4">
          <div class="card mb-4">
            <div class="card-header position-relative d-flex justify-content-center align-items-center" style="background-color: #00ACED;">
              <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" alt="Twitter" width="48px" height="48px">
            </div>
            <div class="card-body row text-center">
              <div class="col">
                <div class="fs-5 fw-bold">973k</div>
                <div class="text-uppercase text-secondary">followers</div>
              </div>
              <div class="vr"></div>
              <div class="col">
                <div class="fs-5 fw-bold">1.792</div>
                <div class="text-uppercase text-secondary">tweets</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Linkedin -->
        <div class="col-sm-6 col-lg-4">
          <div class="card mb-4">
            <div class="card-header position-relative d-flex justify-content-center align-items-center" style="background-color: #4875B4;">
              <img src="https://www.nicepng.com/png/full/23-233614_logo-linkedin-png-blanc-transparent-linkedin-logo-white.png" alt="Linkedin" width="48px" height="48px">
            </div>
            <div class="card-body row text-center">
              <div class="col">
                <div class="fs-5 fw-bold">500+</div>
                <div class="text-uppercase text-secondary">contacts</div>
              </div>
              <div class="vr"></div>
              <div class="col">
                <div class="fs-5 fw-bold">292</div>
                <div class="text-uppercase text-secondary">feeds</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import MyChartUsers from './charts/MyChartUsers.vue';
import MyChartIncome from './charts/MyChartIncome.vue';
import MyChartConversionRate from './charts/MyChartConversionRate.vue';
import MyChartSessions from './charts/MyChartSessions.vue';
import MyChartTraffic from './charts/MyChartTraffic.vue';
export default {
  name: "MyBody",
  components: { MyChartUsers, MyChartIncome, MyChartConversionRate, MyChartSessions, MyChartTraffic }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vr{
  padding : 0
}
</style>
