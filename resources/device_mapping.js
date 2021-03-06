var device_catlog = [
   {device_category:1, device:"Accelerometer", image:"Accelerometer.png",inputs:0,outputs:1},
   {device_category:1, device:"Barometer", image:"barometer.png",inputs:1,outputs:2},
   {device_category:1, device:"Battery", image:"battery.png",inputs:1,outputs:1},
   {device_category:1, device:"Temperature Sensor", image:"TemperatureSensor.png",inputs:0,outputs:1},
   {device_category:1, device:"Gyroscope", image:"gyroscope.png",inputs:1,outputs:1},
   {device_category:1, device:"Humidity Sensor", image:"humidity_sensor.png",inputs:0,outputs:1},
   {device_category:2, device:"Monitor", image:"monitor.png",inputs:1,outputs:1},
   {device_category:2, device:"Bulb", image:"bulb.png",inputs:1,outputs:0},
   {device_category:2, device:"CPU", image:"cpu.png",inputs:1,outputs:1},
   {device_category:2, device:"Smartphone", image:"smartphone.png",inputs:1,outputs:1},
   {device_category:2, device:"Airconditioner", image:"air-conditioner.png",inputs:1,outputs:0},
   {device_category:3, device:"Router", image:"router.png",inputs:1,outputs:1},
   {device_category:3, device:"Third Party Server", image:"thiredpartyServer.png",inputs:1,outputs:1},
   {device_category:3, device:"Cloud", image:"cloud.png",inputs:1,outputs:1},

];

var device_category_arr = [
   {device_category:1, category_name:"Sensors"},
   {device_category:2, category_name:"Devices & Appliances"},
   {device_category:3, category_name:"Network & Services"}
];

var inputs_ports =[
             {inputs:[] },
             {inputs:['in'] },
             {inputs:['in','in1'] },
             {inputs:['in','in1','in2'] },
             {inputs:['in','in1','in2','in3'] },
             {inputs:['in','in1','in2','in3','in4'] },
             {inputs:['in','in1','in2','in3','in4','in5'] },
             {inputs:['in','in1','in2','in3','in4','in5','in6'] }
             ];

var outputs_ports =[
                    {outputs:[] },
                    {outputs:['out'] },
                    {outputs:['out','out1'] },
                    {outputs:['out','out1','out2'] },
                    {outputs:['out','out1','out2','out3'] },
                    {outputs:['out','out1','out2','out3','out4'] },
                    {outputs:['out','out1','out2','out3','out4','out5'] },
                    {outputs:['out','out1','out2','out3','out4','out5','out6'] }
                    ];