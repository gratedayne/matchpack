/**
 * Packs the laid out chip partitions into a single layout.
 * Combines all the individually processed partitions into the final schematic layout.
 */

import type { GraphicsObject } from "graphics-debug"
import { type PackInput, PackSolver2 } from "calculate-packing"
import { BaseSolver } from "../BaseSolver"
import type { OutputLayout, Placement } from "../../types/OutputLayout"
import type { InputProblem } from "../../types/InputProblem"
import { visualizeInputProblem } from "../LayoutPipelineSolver/visualizeInputProblem"
import type { PackedPartition } from "../PackInnerPartitionsSolver/P