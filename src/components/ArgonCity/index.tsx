import React, { Component, createRef } from 'react';
import { initializeCanvas } from './utils/setup';
import styles from './styles.module.css';
import { startDrawing } from './utils/paint';

export type ArgonCityProps = Record<string, never>;

export default class ArgonCity extends Component {
  stageContainerRef = createRef<HTMLDivElement>();

  canvasRef = createRef<HTMLCanvasElement>();

  ctx: CanvasRenderingContext2D | null = null;

  state = {};

  constructor(props: ArgonCityProps) {
    super(props);

    this.paint = this.paint.bind(this);
  }

  componentDidMount(): void {
    try {
      this.paint();
    } catch (error) {
      console.error('Paint command failed');
    }
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  paint(): void {
    if (this.stageContainerRef.current === null) {
      throw new Error('Stage Container element missing');
    }

    const { width, height } = this.stageContainerRef.current.getBoundingClientRect();

    if (this.canvasRef.current === null) {
      throw new Error('Canvas element missing');
    }

    this.ctx = initializeCanvas(this.canvasRef.current, {
      height,
      width
    });

    startDrawing(this.ctx);
  }

  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <div className={styles.moonContainer}>
          <div className={styles.moon} />
        </div>
        <div ref={this.stageContainerRef} className={styles.stageContainer}>
          <canvas className={styles.stage} ref={this.canvasRef} />
        </div>
      </div>
    );
  }
}
