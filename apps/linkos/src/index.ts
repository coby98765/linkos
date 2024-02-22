/************************************************
 ██╗     ██╗███╗   ██╗██╗  ██╗ ██████╗ ███████╗
 ██║     ██║████╗  ██║██║ ██╔╝██╔═══██╗██╔════╝
 ██║     ██║██╔██╗ ██║█████╔╝ ██║   ██║███████╗
 ██║     ██║██║╚██╗██║██╔═██╗ ██║   ██║╚════██║
 ███████╗██║██║ ╚████║██║  ██╗╚██████╔╝███████║
 ╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
 ----------------------------------------------
 * *********************************************/

import CLI from "./utils/CLI.ts";
import KafkaService from "./services/kafka/KafkaService.ts";
import ClickhouseService from "./services/clickhouse/ClickhouseService.ts";


// Modules init.
KafkaService.init();
ClickhouseService.init();

export default await CLI.main();