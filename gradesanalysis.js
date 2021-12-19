//Calculate the average of rows
function rowavg()
{
    var table = document.getElementById("table1");
    var rows = table.rows;
    
    for(var i = 1; i < rows.length-1; i++)
    {
        var cells = rows[i].cells;
        var sum = 0;
    
        for(var x = 2; x <= 4 ; x++)
        {
            var cell = cells[x];
            sum += parseInt(cell.innerHTML);
        }
        var average = sum / 3;
        average = average.toFixed(2);
        rows[i].innerHTML += "<td>"+average+"</td>";
    }
}
//Calculate the statistics of columns
function stats()
{
    var tab = document.getElementById("table1");
    var rows = tab.rows;
    var avg = [];
    var Min = [], Max = [];
    var pie1 = [], pie2 = [], pie3 = [];
    for (var i = 2; i <= 4;i++){
        var sum = 0;
        var min = 100, max = 0;
        var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0;
        for (var j = 1;j < rows.length-1; j++)
        {
            var cells = rows[j].cells;
            var cell = cells[i];
            cell = parseInt(cell.innerHTML);
            if (cell<min)
                min = cell;
            if (cell>max)
                max = cell;
            if (cell<60) sum1++;
            else if (cell>=60&&cell<70) sum2++;
            else if (cell>=70&&cell<80) sum3++;
            else if (cell>=80&&cell<90) sum4++;
            else if (cell>=90) sum5++;
            sum += cell;
        }
        var average = sum / (rows.length-2);
        average = average.toFixed(2);
        avg.push(average);
        Min.push(min);
        Max.push(max);
        if (i==2)
        {
          pie1.push(sum1);
          pie1.push(sum2);
          pie1.push(sum3);
          pie1.push(sum4);
          pie1.push(sum5);
        }
        if (i==3)
        {
          pie2.push(sum1);
          pie2.push(sum2);
          pie2.push(sum3);
          pie2.push(sum4);
          pie2.push(sum5);
        }
        if (i==4)
        {
          pie3.push(sum1);
          pie3.push(sum2);
          pie3.push(sum3);
          pie3.push(sum4);
          pie3.push(sum5);
        }
    }
    return {res1:avg, res2:Min, res3:Max, res4:pie1, res5:pie2, res6:pie3};
}

rowavg();
var result = stats();
let x = result.res1;
let y = result.res2;
let z = result.res3;
let data1 = result.res4;
let data2 = result.res5;
let data3 = result.res6;
console.log(data1);
// Initialize the echarts instance based on the prepared dom

var myChart4 = echarts.init(document.getElementById('he'));
var myChart5 = echarts.init(document.getElementById('ne'));

// Specify the configuration items and data for the chart
var option1 = 
{
  color:"#8499e7", 
  title: {
     text: 'Average '
  },
  tooltip: {},
  legend: {},
   xAxis: {
     data: ['Math', 'English', 'Computer']
   },
  yAxis: {},
  series: 
  [
    {
      type: 'bar',
      data: x,
      barCategoryGap: '60%'
    }
  ]
};
var option2 = {
    color:"#7bd0c1", 
    title: {
      text: 'Mininum'
    },
    tooltip: {},
    legend: {},
    xAxis: {
      data: ['Math', 'English', 'Computer']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: y,
        barCategoryGap: '60%'
      }
    ]
};
var option3 = {
    color:"#ae85ca", 
    title: {
      text: 'Maximum'
    },
    tooltip: {},
    legend: {},
    xAxis: {
      data: ['Math', 'English', 'Computer']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: z,
        barCategoryGap: '60%'
      }
    ]
};

var option4 =
{
  legend: {
    // Try 'horizontal'
    orient: 'vertical',
    right: 10,
    top: 'center'
  },
  color:["#8499e7","#7bd0c1","#ae85ca"],
  tooltip: {},
  dataset: {
    source: [
      ['scores', 'Math', 'English', 'Computer'],
      ['Average', x[0], x[1], x[2]],//43.3, 85.8, 93.7],
      ['Minimum', y[0], y[1], y[2]],
      ['Maximum', z[0], z[1], z[2]],
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar'}, {type:'bar'}, {type:'bar'}]
};

var g1 = [
  {
    name: '<60',
    value: data1[0]
  },
  {
    name: '60-69',
    value: data1[1]
  },
  {
    name: '70-79',
    value: data1[2]
  },
  {
    name: '80-89',
    value: data1[3]
  },
  {
    name: '>90',
    value: data1[4]
  }
];
var g2 = [
  {
    name: '<60',
    value: data2[0]
  },
  {
    name: '60-69',
    value: data2[1]
  },
  {
    name: '70-79',
    value: data2[2]
  },
  {
    name: '80-89',
    value: data2[3]
  },
  {
    name: '>90',
    value: data2[4]
  }
];
var g3 = [
  {
    name: '<60',
    value: data3[0]
  },
  {
    name: '60-69',
    value: data3[1]
  },
  {
    name: '70-79',
    value: data3[2]
  },
  {
    name: '80-89',
    value: data3[3]
  },
  {
    name: '>90',
    value: data3[4]
  }
];
var option5 = {
  title: [
    {
      //text: 'Pie label alignTo',
      //left: 'center'
    },
    {
      subtext: 'Math',
      left: '16.67%',
      top: '75%',
      textAlign: 'center'
    },
    {
      subtext: 'English',
      left: '50%',
      top: '75%',
      textAlign: 'center'
    },
    {
      subtext: 'Computer',
      left: '83.33%',
      top: '75%',
      textAlign: 'center'
    }
  ],
  color:["#7ecaf6","#f2849e","#8499e7","#7bd0c1","#ae85ca"],
  tooltip: {},
  series: [
    {
      type: 'pie',
      radius: '40%',
      center: ['50%', '50%'],
      data: g1,
      label: {
        position: 'outer',
        alignTo: 'none',
        bleedMargin: 5
      },
      left: 0,
      right: '66.6667%',
      top: 0,
      bottom: 0
    },
    {
      type: 'pie',
      radius: '40%',
      center: ['50%', '50%'],
      data: g2,
      label: {
        position: 'outer',
        alignTo: 'labelLine',
        bleedMargin: 5
      },
      left: '33.3333%',
      right: '33.3333%',
      top: 0,
      bottom: 0
    },
    {
      type: 'pie',
      radius: '40%',
      center: ['50%', '50%'],
      data: g3,
      label: {
        position: 'outer',
        alignTo: 'edge',
        margin: 17
      },
      left: '66.6667%',
      right: 0,
      top: 0,
      bottom: 0
    }
  ]
};

// Display the chart using the configuration items and data just specified.

myChart4.setOption(option4);
myChart5.setOption(option5);
