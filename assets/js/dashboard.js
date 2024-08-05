$(function () {


  // =====================================
  // Profit
  // =====================================
  var chart = {
    series: [
      { name: "Earnings this month:", data: [355, 390, 300, 350, 390, 180, 355, 390] },
      { name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280, 250] },
    ],

    chart: {
      type: "bar",
      height: 345,
      offsetX: -15,
      toolbar: { show: true },
      foreColor: "#adb0bb",
      fontFamily: 'inherit',
      sparkline: { enabled: false },
    },


    colors: ["#5D87FF", "#49BEFF"],


    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },


    legend: {
      show: false,
    },


    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      type: "category",
      categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },


    yaxis: {
      show: true,
      min: 0,
      max: 400,
      tickAmount: 4,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },


    tooltip: { theme: "light" },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            }
          },
        }
      }
    ]


  };

  var chart = new ApexCharts(document.querySelector("#chart"), chart);
  chart.render();


  // =====================================
  // Breakup
  // =====================================
  var breakup = {
    color: "#adb5bd",
    series: [38, 40, 25],
    labels: ["2022", "2021", "2020"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  chart.render();



  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "#49BEFF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();
})


  document.addEventListener('DOMContentLoaded', function() {
    // Target the link and the overlay/popup elements
    var moreLink = document.getElementById('moreAboutOffer');
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    var popup = document.createElement('div');
    popup.className = 'popup';
    // Set popup content
    popup.innerHTML = 'This offer only applies to new users. On first sign up, deposit Bitcoin worth $100 or more to your wallet address or buy from P2P. Once confirmed, assuming you deposited $100, your account will be credited with $25 as welcome bonus. Your new balance will be $125. Terms and Conditions apply <br><button onclick="closePopup()">Close</button>';

    // Append the overlay and popup to the body
    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    // Event listener for the link click
    moreLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        overlay.style.display = 'block'; // Show the overlay
        popup.style.display = 'block'; // Show the popup
    });

    // Function to close the popup
    window.closePopup = function() {
        overlay.style.display = 'none'; // Hide the overlay
        popup.style.display = 'none'; // Hide the popup
    };
});



  // Dummy data for demonstration
  const btcData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
          label: 'BTC Price',
          data: [30000, 35000, 32000, 38000, 40000, 42000],
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          tension: 0.3
      }]
  };

  const ethData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
          label: 'ETH Price',
          data: [1500, 1600, 1700, 1800, 1900, 2000],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.3
      }]
  };

  const usdcData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
          label: 'USDC Price',
          data: [1, 1.1, 1.2, 1.3, 1.4, 1.5],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.3
      }]
  };

  const usdtData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
          label: 'USDT Price',
          data: [1, 1.01, 1.02, 1.03, 1.04, 1.05],
          borderColor: 'rgb(153, 102, 255)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          tension: 0.3
      }]
  };

  // Render charts with animations and enhanced options
  const btcCtx = document.getElementById('btcChart').getContext('2d');
  const ethCtx = document.getElementById('ethChart').getContext('2d');
  const usdcCtx = document.getElementById('usdcChart').getContext('2d');
  const usdtCtx = document.getElementById('usdtChart').getContext('2d');

  new Chart(btcCtx, {
      type: 'line',
      data: btcData,
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false
              },
              tooltip: {
                  mode: 'index',
                  intersect: false
              }
          },
          animation: {
              duration: 1000,
              easing: 'easeInOutQuart'
          },
          scales: {
              x: {
                  grid: {
                      display: false
                  }
              },
              y: {
                  grid: {
                      color: 'rgba(0, 0, 0, 0.1)'
                  }
              }
          }
      }
  });

  new Chart(ethCtx, {
      type: 'line',
      data: ethData,
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false
              },
              tooltip: {
                  mode: 'index',
                  intersect: false
              }
          },
          animation: {
              duration: 1000,
              easing: 'easeInOutQuart'
          },
          scales: {
              x: {
                  grid: {
                      display: false
                  }
              },
              y: {
                  grid: {
                      color: 'rgba(0, 0, 0, 0.1)'
                  }
              }
          }
      }
  });

  new Chart(usdcCtx, {
      type: 'line',
      data: usdcData,
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false
              },
              tooltip: {
                  mode: 'index',
                  intersect: false
              }
          },
          animation: {
              duration: 1000,
              easing: 'easeInOutQuart'
          },
          scales: {
              x: {
                  grid: {
                      display: false
                  }
              },
              y: {
                  grid: {
                      color: 'rgba(0, 0, 0, 0.1)'
                  }
              }
          }
      }
  });

  new Chart(usdtCtx, {
      type: 'line',
      data: usdtData,
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false
              },
              tooltip: {
                  mode: 'index',
                  intersect: false
              }
          },
          animation: {
              duration: 1000,
              easing: 'easeInOutQuart'
          },
          scales: {
              x: {
                  grid: {
                      display: false
                  }
              },
              y: {
                  grid: {
                      color: 'rgba(0, 0, 0, 0.1)'
                  }
              }
          }
      }
  });

  // Sample notifications array (this would typically come from a server)
  const notifications = [];

  // Function to toggle notification display
  function toggleNotifications() {
      const notificationsDiv = document.getElementById('notifications');
      const notificationList = document.getElementById('notification-list');

      // Clear the current notifications
      notificationList.innerHTML = '';

      if (notifications.length === 0) {
          // If no notifications, display "No Notifications"
          const noNotificationsItem = document.createElement('li');
          noNotificationsItem.textContent = 'No Notifications';
          noNotificationsItem.classList.add('no-notifications');
          notificationList.appendChild(noNotificationsItem);
      } else {
          // Add notifications to the list
          notifications.forEach(notification => {
              const listItem = document.createElement('li');
              listItem.textContent = notification;
              notificationList.appendChild(listItem);
          });
      }

      // Toggle the visibility of the notifications div
      notificationsDiv.style.display = notificationsDiv.style.display === 'none' ? 'block' : 'none';
  }

  // Initially set notifications div to display none
  document.getElementById('notifications').style.display = 'none';

  // Close the notifications dropdown if clicked outside
  document.addEventListener('click', function(event) {
      const notificationsDiv = document.getElementById('notifications');
      const bellIcon = document.querySelector('.notification-bell i');
      if (!notificationsDiv.contains(event.target) && !bellIcon.contains(event.target)) {
          notificationsDiv.style.display = 'none';
      }
  });

  function simulateFluctuation() {
      const changes = document.querySelectorAll('.hot-change');
      changes.forEach(change => {
          let currentPercentage = parseFloat(change.textContent);
          let randomChange = (Math.random() * 2 - 1) * 0.5; // random change between -0.5% to +0.5%
          let newPercentage = currentPercentage + randomChange;
          change.textContent = newPercentage.toFixed(2) + '%';
          
          // Change the class based on positive or negative change
          if (newPercentage >= 0) {
              change.classList.remove('hot-negative');
              change.classList.add('hot-positive');
          } else {
              change.classList.remove('hot-positive');
              change.classList.add('hot-negative');
          }
      });
  }

  // Update every 5 seconds
  setInterval(simulateFluctuation, 1000);



  
  const newsHeadlines = [
    "Bitcoin hits an unprecedented new all-time high, surpassing $70,000 amid bullish market sentiment.",
    "Ethereum's latest upgrades to its network significantly enhance scalability and transaction throughput.",
    "Recent regulatory changes worldwide have sparked volatility in crypto markets, impacting investor sentiment.",
    "A promising new decentralized finance (DeFi) platform gains substantial traction, attracting significant investment.",
    "Institutional interest in cryptocurrencies continues to soar, with major financial institutions exploring digital asset adoption.",
    "The launch of a groundbreaking blockchain technology promises to revolutionize supply chain management globally.",
    "Cryptocurrency mining operations face scrutiny for their environmental impact, leading to calls for sustainable practices.",
    "NFTs (Non-Fungible Tokens) are reshaping the art industry, with multimillion-dollar sales becoming increasingly common.",
    "Blockchain-based voting systems gain momentum, with several countries exploring digital voting solutions for elections.",
    "The integration of cryptocurrencies into mainstream payment systems reaches new heights, facilitating seamless transactions globally."
];

  
  function updateCryptoNews() {
      const newsParagraph = document.getElementById('crypto-news');
      const randomIndex = Math.floor(Math.random() * newsHeadlines.length);
      const randomHeadline = newsHeadlines[randomIndex];

      // Apply animation class
      newsParagraph.style.animation = 'newsAnimation 1.5s ease-out';

      // Update content after animation
      setTimeout(() => {
          newsParagraph.textContent = randomHeadline;
      }, 1000); // Wait for animation to complete (0.5s)
  }

 
  updateCryptoNews();

 
  setInterval(updateCryptoNews, 3000); // 10 seconds in milliseconds

  
