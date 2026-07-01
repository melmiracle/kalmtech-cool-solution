import type { ProductCategory } from "@/types/product";

export const itCategories: ProductCategory[] = [
  {
    image: "/images/computers.jpg",
    title: "Computers & Laptops",
    description:
      "Desktop PCs, laptops, and all-in-ones for home, office, and school use. Available retail and wholesale at competitive prices.",
    availability: "Retail & Wholesale",
    category: "IT",
    items: [
      {
        name: "Desktop PC Bundle",
        image: "/images/desktop-pc.jpg",
        description:
          "Intel Core i5, 8GB DDR4 RAM, 512GB SSD, 22-inch monitor, keyboard & mouse set. Perfect for office and school use.",
        specifications: [
          { label: "Processor", value: "Intel Core i5-12400 (6C/12T)" },
          { label: "RAM", value: "8GB DDR4 (upgradable to 32GB)" },
          { label: "Storage", value: "512GB NVMe SSD" },
          { label: "Monitor", value: "22-inch IPS 1080p" },
          { label: "OS", value: "Windows 11 Pro Pre-Installed" },
        ],
        price: "₱28,000",
        availability: "Retail & Wholesale",
      },
      {
        name: "Gaming Laptop",
        image: "/images/gaming-laptop.jpg",
        description:
          "Intel Core i7, 16GB RAM, RTX 4060, 512GB SSD. Handles gaming, video editing, and heavy multitasking with ease.",
        specifications: [
          { label: "Processor", value: "Intel Core i7-13620H" },
          { label: "RAM", value: "16GB DDR5" },
          { label: "GPU", value: "NVIDIA RTX 4060 8GB" },
          { label: "Storage", value: "512GB NVMe SSD" },
          { label: "Display", value: "15.6-inch FHD 144Hz" },
        ],
        price: "₱55,000",
        availability: "Retail Only",
      },
      {
        name: "Office Laptop",
        image: "/images/office-laptop.jpg",
        description:
          "Intel Core i3, 8GB RAM, 256GB SSD. Lightweight and reliable for daily office tasks, browsing, and video calls.",
        specifications: [
          { label: "Processor", value: "Intel Core i3-1215U" },
          { label: "RAM", value: "8GB DDR4" },
          { label: "Storage", value: "256GB NVMe SSD" },
          { label: "Display", value: "14-inch FHD" },
          { label: "Battery", value: "Up to 8 hours" },
        ],
        price: "₱18,000",
        availability: "Retail & Wholesale",
      },
      {
        name: "All-in-One PC",
        image: "/images/allinone-pc.jpg",
        description:
          "Intel Core i5, 8GB RAM, 1TB HDD, 23.8-inch touchscreen. Sleek space-saving design perfect for reception areas.",
        specifications: [
          { label: "Processor", value: "Intel Core i5-1235U" },
          { label: "RAM", value: "8GB DDR4" },
          { label: "Storage", value: "1TB HDD + 256GB SSD" },
          { label: "Display", value: "23.8-inch FHD Touchscreen" },
          { label: "OS", value: "Windows 11 Home" },
        ],
        price: "₱32,000",
        availability: "Retail & Wholesale",
      },
    ],
  },
  {
    image: "/images/peripherals.jpg",
    title: "Peripherals & Accessories",
    description:
      "Keyboards, mice, monitors, webcams, headsets, and more. Quality brands for everyday use and professional setups.",
    availability: "Retail & Wholesale",
    category: "IT",
    items: [
      {
        name: "Mechanical Keyboard",
        image: "/images/mechanical-keyboard.jpg",
        description:
          "Full-size mechanical keyboard with RGB backlighting, blue switches, and USB-C connectivity.",
        specifications: [
          { label: "Switch Type", value: "Blue Mechanical (Clicky)" },
          { label: "Layout", value: "Full-size 104-key" },
          { label: "Backlight", value: "Per-key RGB" },
          { label: "Connectivity", value: "USB-C (Detachable Cable)" },
          { label: "Compatibility", value: "Windows / macOS / Linux" },
        ],
        price: "₱2,500",
        availability: "Retail & Wholesale",
      },
      {
        name: "Wireless Mouse",
        image: "/images/wireless-mouse.jpg",
        description:
          "Ergonomic wireless mouse with 6 programmable buttons, silent clicks, and USB receiver.",
        specifications: [
          { label: "DPI", value: "800 / 1200 / 1600 / 2400" },
          { label: "Buttons", value: "6 (Programmable)" },
          { label: "Connection", value: "2.4GHz Wireless + Bluetooth" },
          { label: "Battery", value: "1x AA (up to 12 months)" },
          { label: "Compatibility", value: "Windows / macOS / Chrome OS" },
        ],
        price: "₱800",
        availability: "Retail & Wholesale",
      },
      {
        name: '24" IPS Monitor',
        image: "/images/ips-monitor.jpg",
        description:
          "24-inch IPS panel with 1080p resolution, 75Hz refresh rate, and built-in speakers.",
        specifications: [
          { label: "Panel Type", value: "IPS" },
          { label: "Resolution", value: "1920 x 1080 (FHD)" },
          { label: "Refresh Rate", value: "75Hz" },
          { label: "Ports", value: "HDMI 1.4 · VGA · 3.5mm Audio" },
          { label: "Speakers", value: "Built-in 2W x 2" },
        ],
        price: "₱6,500",
        availability: "Retail & Wholesale",
      },
      {
        name: "HD Webcam",
        image: "/images/hd-webcam.jpg",
        description:
          "1080p webcam with built-in microphone, auto light correction, and universal clip. Plug-and-play.",
        specifications: [
          { label: "Resolution", value: "1080p (1920 x 1080) @ 30fps" },
          { label: "Microphone", value: "Built-in Noise-Cancelling" },
          { label: "Field of View", value: "78°" },
          { label: "Connection", value: "USB-A (1.8m Cable)" },
          { label: "Mount", value: "Universal clip for monitor/tripod" },
        ],
        price: "₱1,200",
        availability: "Retail & Wholesale",
      },
    ],
  },
  {
    image: "/images/networking.jpg",
    title: "Networking Devices",
    description:
      "Routers, switches, access points, LAN cables, and network accessories for homes, offices, and commercial establishments.",
    availability: "Retail & Wholesale",
    category: "IT",
    items: [
      {
        name: "Wi-Fi 6 Router",
        image: "/images/wifi-router.jpg",
        description:
          "Dual-band Wi-Fi 6 router with 4 external antennas, Gigabit ports, and MU-MIMO technology.",
        specifications: [
          { label: "Standard", value: "Wi-Fi 6 (802.11ax)" },
          { label: "Bands", value: "2.4GHz + 5GHz (up to 3000Mbps)" },
          { label: "Ports", value: "4x Gigabit LAN · 1x Gigabit WAN" },
          { label: "Antennas", value: "4x External High-Gain" },
          { label: "Security", value: "WPA3 · SPI Firewall · VPN" },
        ],
        price: "₱3,500",
        availability: "Retail & Wholesale",
      },
      {
        name: "8-Port Gigabit Switch",
        image: "/images/network-switch.jpg",
        description:
          "Unmanaged 8-port Gigabit switch with metal casing, fanless design, and plug-and-play setup.",
        specifications: [
          { label: "Ports", value: "8x Gigabit RJ-45" },
          { label: "Switching Capacity", value: "16 Gbps" },
          { label: "MAC Table", value: "8K Entries" },
          { label: "Housing", value: "Metal Case (Rack-Mountable)" },
          { label: "Cooling", value: "Fanless (Silent)" },
        ],
        price: "₱1,800",
        availability: "Retail & Wholesale",
      },
      {
        name: "Ceiling Access Point",
        image: "/images/access-point.jpg",
        description:
          "Wi-Fi 6 ceiling-mount access point with PoE support, designed for high-density environments.",
        specifications: [
          { label: "Standard", value: "Wi-Fi 6 (802.11ax)" },
          { label: "Concurrent Users", value: "Up to 300" },
          { label: "Power", value: "PoE (802.3af/at)" },
          { label: "Range", value: "Up to 200m (Open Area)" },
          { label: "Mount", value: "Ceiling / Wall" },
        ],
        price: "₱4,500",
        availability: "Wholesale Only",
      },
      {
        name: "CAT6 LAN Cable 10m",
        image: "/images/lan-cable.jpg",
        description:
          "Snagless CAT6 UTP patch cable with copper conductors. Tested for Gigabit speeds. Available in various lengths.",
        specifications: [
          { label: "Category", value: "CAT6" },
          { label: "Length", value: "10 meters (Custom lengths available)" },
          { label: "Conductor", value: "Pure Copper (CCA Free)" },
          { label: "Speed", value: "Up to 1Gbps @ 250MHz" },
          { label: "Connector", value: "RJ-45 Snagless Boot" },
        ],
        price: "₱350",
        availability: "Retail & Wholesale",
      },
    ],
  },
];

export const airconCategories: ProductCategory[] = [
  {
    image: "/images/aircon-unit.jpg",
    title: "Aircon Units (Retail & Wholesale)",
    description:
      "Split-type, window-type, and inverter aircon units from top brands. Buy single units or in bulk.",
    availability: "Retail & Wholesale",
    category: "Aircon",
    items: [
      {
        name: "1.0HP Split Inverter",
        image: "/images/split-inverter-1hp.jpg",
        description:
          "LG 1.0HP split-type inverter aircon with 5-star PEEF rating, WiFi control, and anti-virus filter.",
        specifications: [
          { label: "Capacity", value: "1.0HP (9,000 BTU/h)" },
          { label: "Type", value: "Split Inverter" },
          { label: "Energy Rating", value: "5-Star PEEF" },
          { label: "Features", value: "WiFi · Anti-Virus Filter · Auto Restart" },
          { label: "Warranty", value: "1 year parts · 5 years compressor" },
        ],
        price: "₱28,000",
        availability: "Retail & Wholesale",
      },
      {
        name: "1.5HP Window Type",
        image: "/images/aircon-unit.jpg",
        description:
          "Carrier 1.5HP window-type non-inverter. Reliable cooling for medium-sized rooms.",
        specifications: [
          { label: "Capacity", value: "1.5HP (12,000 BTU/h)" },
          { label: "Type", value: "Window Non-Inverter" },
          { label: "Energy Rating", value: "3-Star PEEF" },
          { label: "Controls", value: "Remote + Manual" },
          { label: "Warranty", value: "1 year parts · 3 years compressor" },
        ],
        price: "₱18,000",
        availability: "Retail & Wholesale",
      },
      {
        name: "2.0HP Split Non-Inverter",
        image: "/images/aircon-unit.jpg",
        description:
          "Panasonic 2.0HP split-type non-inverter for commercial or large-room applications. Durable and powerful.",
        specifications: [
          { label: "Capacity", value: "2.0HP (18,000 BTU/h)" },
          { label: "Type", value: "Split Non-Inverter" },
          { label: "Energy Rating", value: "3-Star PEEF" },
          { label: "Cooling Area", value: "Up to 40 sqm" },
          { label: "Warranty", value: "1 year parts · 5 years compressor" },
        ],
        price: "₱35,000",
        availability: "Retail & Wholesale",
      },
      {
        name: "0.75HP Split Inverter",
        image: "/images/aircon-unit.jpg",
        description:
          "Kolin 0.75HP split inverter — budget-friendly, energy-efficient, ideal for small bedrooms.",
        specifications: [
          { label: "Capacity", value: "0.75HP (6,500 BTU/h)" },
          { label: "Type", value: "Split Inverter" },
          { label: "Energy Rating", value: "5-Star PEEF" },
          { label: "Cooling Area", value: "Up to 15 sqm" },
          { label: "Warranty", value: "1 year parts · 5 years compressor" },
        ],
        price: "₱15,000",
        availability: "Retail & Wholesale",
      },
    ],
  },
  {
    image: "/images/aircon-installation.jpg",
    title: "Aircon Installation",
    description:
      "Professional installation for all aircon types. Proper mounting, wiring, and testing to ensure peak performance.",
    availability: "Residential & Commercial",
    category: "Aircon",
    items: [
      {
        name: "Standard Split-Type Installation",
        image: "/images/aircon-installation.jpg",
        description:
          "Complete installation for split-type units up to 1.5HP. Includes mounting bracket, drainage, and electrical connection.",
        specifications: [
          { label: "Includes", value: "Mounting bracket, drainage hose, electrical connection, unit testing" },
          { label: "Max Piping", value: "Up to 1.5 meters included (excess charged separately)" },
          { label: "Max Unit Size", value: "Up to 1.5HP" },
          { label: "Service Area", value: "Metro Manila & nearby provinces" },
          { label: "Warranty", value: "30 days on installation" },
        ],
        price: "₱3,500",
        availability: "Residential & Commercial",
      },
      {
        name: "Complex Installation",
        image: "/images/aircon-installation.jpg",
        description:
          "For installations requiring long piping, hard-to-reach locations, or special mounting requirements.",
        specifications: [
          { label: "Includes", value: "Extended piping, special mounting, cable concealment" },
          { label: "Max Piping", value: "Up to 5 meters included" },
          { label: "Applications", value: "High walls, ceiling voids, exterior mounting" },
          { label: "Service Area", value: "Metro Manila & nearby provinces" },
          { label: "Warranty", value: "30 days on installation" },
        ],
        price: "₱5,500",
        availability: "Residential & Commercial",
      },
      {
        name: "Cassette Type Installation",
        image: "/images/cassette-installation.jpg",
        description:
          "Ceiling cassette installation for commercial spaces. Includes ceiling cut-out, mounting, and ducting.",
        specifications: [
          { label: "Includes", value: "Ceiling cut-out, mounting frame, drainage, ducting" },
          { label: "Max Unit Size", value: "Up to 4.0HP" },
          { label: "Ceiling Type", value: "Suspended ceiling / Drop ceiling" },
          { label: "Service Area", value: "Metro Manila & nearby provinces" },
          { label: "Warranty", value: "30 days on installation" },
        ],
        price: "₱7,000",
        availability: "Commercial Only",
      },
      {
        name: "Window Type Installation",
        image: "/images/aircon-installation.jpg",
        description:
          "Simple and quick window-type installation. Includes framing, sealing, and testing.",
        specifications: [
          { label: "Includes", value: "Window framing, weather seal, electrical connection, testing" },
          { label: "Max Unit Size", value: "Up to 2.5HP" },
          { label: "Window Type", value: "Slider or casement" },
          { label: "Service Area", value: "Metro Manila & nearby provinces" },
          { label: "Warranty", value: "30 days on installation" },
        ],
        price: "₱1,500",
        availability: "Residential & Commercial",
      },
    ],
  },
  {
    image: "/images/aircon-cleaning.jpg",
    title: "Aircon Cleaning",
    description:
      "Deep cleaning of filters, coils, and drain lines to remove dust, mold, and bacteria.",
    availability: "Residential & Commercial",
    category: "Aircon",
    items: [
      {
        name: "Standard Cleaning",
        image: "/images/standard-cleaning.jpg",
        description:
          "Filter and coil wash with mild cleaning solution. Quick service for units that receive regular maintenance.",
        specifications: [
          { label: "Includes", value: "Filter removal & wash · Coil spray & rinse · Drain line flush" },
          { label: "Method", value: "Water pressure wash + mild detergent" },
          { label: "Duration", value: "30-45 minutes per unit" },
          { label: "Recommended", value: "Every 3 months" },
        ],
        price: "₱800",
        availability: "Residential & Commercial",
      },
      {
        name: "Deep Cleaning",
        image: "/images/aircon-cleaning.jpg",
        description:
          "Full interior cleaning with antibacterial treatment, steam cleaning, and deodorizer application.",
        specifications: [
          { label: "Includes", value: "Full interior disassembly · Coil steam cleaning · Antibacterial spray · Deodorizer" },
          { label: "Method", value: "Chemical treatment + steam cleaning" },
          { label: "Duration", value: "1-1.5 hours per unit" },
          { label: "Recommended", value: "Every 6 months or if musty odor present" },
        ],
        price: "₱1,500",
        availability: "Residential & Commercial",
      },
      {
        name: "Chemical Overhaul",
        image: "/images/aircon-cleaning.jpg",
        description:
          "Complete strip-down cleaning. Unit is fully disassembled and each part is cleaned individually for maximum performance.",
        specifications: [
          { label: "Includes", value: "Full strip-down · Part-by-part cleaning · Deep coil chemical bath · Reassembly & testing" },
          { label: "Duration", value: "2-3 hours per unit" },
          { label: "Result", value: "Restores cooling performance, removes all accumulated grime" },
          { label: "Recommended", value: "Yearly or if unit has never been deep cleaned" },
        ],
        price: "₱3,000",
        availability: "Residential & Commercial",
      },
    ],
  },
  {
    image: "/images/aircon-repair.jpg",
    title: "Repair & Diagnostics",
    description:
      "Fast and accurate troubleshooting for all aircon problems — not cooling, water leaks, noisy compressors, PCB failures.",
    availability: "All Types",
    category: "Aircon",
    items: [
      {
        name: "Diagnostic Service",
        image: "/images/diagnostic-service.jpg",
        description:
          "Full inspection and diagnostic assessment of your unit. Fee is waived if you proceed with the repair.",
        specifications: [
          { label: "Includes", value: "Full unit inspection, component testing, diagnostic report" },
          { label: "Diagnostic Fee", value: "Free with repair" },
          { label: "Duration", value: "30 minutes to 1 hour" },
          { label: "Coverage", value: "Electrical, mechanical, and refrigerant system" },
        ],
        availability: "Free with Repair",
      },
      {
        name: "Compressor Replacement",
        image: "/images/aircon-repair.jpg",
        description:
          "Replacement of faulty compressor. Includes removal of old unit, installation of new compressor, and full system test.",
        specifications: [
          { label: "Includes", value: "Old compressor removal, new compressor installation, refrigerant charge, system test" },
          { label: "Compressor Types", value: "Reciprocating · Rotary · Scroll (Inverter)" },
          { label: "Warranty", value: "30 days on service · Manufacturer warranty on part" },
          { label: "Duration", value: "2-4 hours" },
        ],
        price: "₱4,500+",
        availability: "All Types",
      },
      {
        name: "PCB / Control Board Repair",
        image: "/images/aircon-repair.jpg",
        description:
          "Diagnosis and repair of faulty printed circuit boards. Common issues: no power, no display, erratic behavior.",
        specifications: [
          { label: "Includes", value: "PCB diagnosis, component-level repair or replacement, functional test" },
          { label: "Common Failures", value: "Burnt capacitors · Blown fuses · Relay failure · Power IC damage" },
          { label: "Warranty", value: "30 days on repair" },
          { label: "Duration", value: "1-3 hours depending on complexity" },
        ],
        price: "₱2,500",
        availability: "All Types",
      },
      {
        name: "Fan Motor Replacement",
        image: "/images/aircon-repair.jpg",
        description:
          "Replacement of faulty indoor or outdoor fan motor. Fixes non-spinning fans, noisy operation, and insufficient airflow.",
        specifications: [
          { label: "Includes", value: "Fan motor replacement, blade balancing, full system test" },
          { label: "Motor Types", value: "AC motor · DC motor (Inverter)" },
          { label: "Warranty", value: "30 days on service · 90 days on part" },
          { label: "Duration", value: "1-2 hours" },
        ],
        price: "₱2,000",
        availability: "All Types",
      },
    ],
  },
  {
    image: "/images/aircon-maintenance.jpg",
    title: "Preventive Maintenance",
    description:
      "Scheduled PM service to keep your unit in top shape. Includes inspection, cleaning, and minor adjustments.",
    availability: "Scheduled Plans Available",
    category: "Aircon",
    items: [
      {
        name: "Basic PM Plan",
        image: "/images/basic-pm.jpg",
        description:
          "Quarterly inspection and cleaning. Perfect for homes or small offices with 1-3 units.",
        specifications: [
          { label: "Schedule", value: "Every 3 months (4 visits/year)" },
          { label: "Includes", value: "Filter cleaning · Coil inspection · Drain check · Performance check" },
          { label: "Discount", value: "10% off standard cleaning rates" },
          { label: "Priority", value: "Standard scheduling" },
        ],
        price: "₱1,500/visit",
        availability: "Residential & Small Office",
      },
      {
        name: "Premium PM Plan",
        image: "/images/aircon-maintenance.jpg",
        description:
          "Monthly inspection with priority service scheduling. Ideal for businesses that rely heavily on air conditioning.",
        specifications: [
          { label: "Schedule", value: "Monthly (12 visits/year)" },
          { label: "Includes", value: "Full cleaning · Coil treatment · Filter replacement · System optimization" },
          { label: "Discount", value: "20% off all services and parts" },
          { label: "Priority", value: "Priority scheduling (24-48hr response)" },
        ],
        price: "₱3,000/visit",
        availability: "Commercial & High-Usage",
      },
      {
        name: "Commercial PM Plan",
        image: "/images/aircon-maintenance.jpg",
        description:
          "Tailored for offices, restaurants, and retail stores with multiple units. Includes bulk discounts.",
        specifications: [
          { label: "Coverage", value: "All units in single location (unlimited units)" },
          { label: "Schedule", value: "Customizable (quarterly / monthly)" },
          { label: "Includes", value: "Full cleaning for all units · Priority dispatch · Quarterly detailed report" },
          { label: "Discount", value: "25% off all services and parts" },
          { label: "Priority", value: "Priority scheduling (12-24hr response)" },
        ],
        price: "Contact for Quote",
        availability: "Commercial Only",
      },
    ],
  },
  {
    image: "/images/aircon-freon.jpg",
    title: "Freon Recharging",
    description:
      "Safe and accurate refrigerant recharging to restore cooling capacity. We check for leaks first to ensure lasting results.",
    availability: "All Types",
    category: "Aircon",
    items: [
      {
        name: "R-22 Refrigerant Recharge",
        image: "/images/aircon-freon.jpg",
        description:
          "Refrigerant top-up for older R-22 units. Includes leak detection and pressure test.",
        specifications: [
          { label: "Refrigerant", value: "R-22 (HCFC)" },
          { label: "Includes", value: "Leak detection · Pressure test · Refrigerant top-up" },
          { label: "Warranty", value: "30-day warranty on recharge" },
          { label: "Note", value: "R-22 is being phased out. Higher cost due to scarcity." },
        ],
        price: "₱1,500",
        availability: "All Types",
      },
      {
        name: "R-32 Refrigerant Recharge",
        image: "/images/r32-recharge.jpg",
        description:
          "Top-up for modern R-32 inverter units. More eco-friendly and efficient.",
        specifications: [
          { label: "Refrigerant", value: "R-32 (HFC)" },
          { label: "Includes", value: "Leak detection · Pressure test · Refrigerant top-up" },
          { label: "Warranty", value: "30-day warranty on recharge" },
          { label: "Note", value: "Lower global warming potential than R-22" },
        ],
        price: "₱1,000",
        availability: "All Types",
      },
      {
        name: "R-410A Refrigerant Recharge",
        image: "/images/aircon-freon.jpg",
        description:
          "Top-up for high-end R-410A systems. Common in newer split-type and commercial units.",
        specifications: [
          { label: "Refrigerant", value: "R-410A (HFC Blend)" },
          { label: "Includes", value: "Leak detection · Pressure test · Refrigerant top-up" },
          { label: "Warranty", value: "30-day warranty on recharge" },
          { label: "Note", value: "Operates at higher pressure. Requires certified handling." },
        ],
        price: "₱1,200",
        availability: "All Types",
      },
    ],
  },
];

export const allCategories: ProductCategory[] = [
  ...itCategories,
  ...airconCategories,
];
